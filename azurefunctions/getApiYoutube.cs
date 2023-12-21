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

namespace Kintela.Function
{
    public static class GetApiYoutube
    {
        [FunctionName("GetApiYoutube")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
             string keyVaultName = Environment.GetEnvironmentVariable("KEY_VAULT_NAME");
            var kvUri = $"https://{keyVaultName}.vault.azure.net";

            var client = new SecretClient(new Uri(kvUri), new DefaultAzureCredential());

            try
            {
                KeyVaultSecret secret = await client.GetSecretAsync("apiYoutube");
                string apiKey = secret.Value;

                // Aquí devolvemos la clave API en la respuesta, pero podría ser un riesgo de seguridad.
                // Normalmente, usarías la clave API para realizar alguna operación y luego devolverías el resultado de esa operación.
                return new OkObjectResult(new { ApiKey = apiKey });
            }
            catch (Exception e)
            {
                log.LogError($"Error al obtener el secreto del Key Vault: {e.Message}");
                return new StatusCodeResult(500); // Error interno del servidor
            }
        }
    }
}
