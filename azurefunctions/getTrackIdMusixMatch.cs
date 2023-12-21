using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
using System.Net.Http;
using System.Net;

namespace Kintela.Function
{
    public static class GetTrackIdMusixMatch
    {
        [FunctionName("GetTrackIdMusixMatch")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");
            // Obtener los parámetros de la solicitud
            string artist = req.Query["artist"];
            string track = req.Query["track"];
            // Verificar si los parámetros son válidos
            if (string.IsNullOrEmpty(artist) || string.IsNullOrEmpty(track))
            {
                return new BadRequestObjectResult("Please provide both artist and track parameters.");
            }
            // Obtener la clave API de Musixmatch desde las variables de entorno
            string apiKey = Environment.GetEnvironmentVariable("musixmatchapikey", EnvironmentVariableTarget.Process);
            // Crear una instancia de HttpClient
            using (var client = new HttpClient())
            {
                // Construir la URL de la API de Musixmatch
                string baseUrl = "https://api.musixmatch.com/ws/1.1/track.search";
                string url = $"{baseUrl}?q_artist={WebUtility.UrlEncode(artist)}&q_track={WebUtility.UrlEncode(track)}&apikey={apiKey}";
                try
                {
                    // Hacer la llamada a la API y obtener la respuesta
                    var response = await client.GetAsync(url);
                    // Asegurarse de que la respuesta es exitosa
                    if (response.IsSuccessStatusCode)
                    {
                        // Leer el contenido de la respuesta
                        string responseContent = await response.Content.ReadAsStringAsync();
                        // Devolver el contenido de la respuesta
                        return new OkObjectResult(responseContent);
                    }
                    else
                    {
                        // Manejar errores, como un código de estado HTTP no exitoso
                        log.LogError($"Error en la llamada a la API: {response.StatusCode}");
                        return new StatusCodeResult((int)response.StatusCode);
                    }
                }
                catch (Exception ex)
                {
                    // Manejar excepciones, como problemas de red
                    log.LogError($"Excepción al llamar a la API: {ex.Message}");
                    return new StatusCodeResult(StatusCodes.Status500InternalServerError);
                }
            }        
        }
    }
}
