import { IConcierto } from "./IConcierto";

export const conciertos:IConcierto[]=[
    {
        fecha: new Date(2023, 10, 20),
        ciudad: 'Bilbao',
        sala: 'Bilbao Arena',
        grupo: 'Miguel Rios',
        videos:['https://www.youtube.com/embed/liimiG2-22k?si=q9oxD5r7gyI-rwMF','https://www.youtube.com/embed/BkGc1gXHfuw?si=JQ9mjv50MZHxk7O1','https://www.youtube.com/embed/ajCVOi_h6zA?si=S3LlHcS032JKnJ0z','https://www.youtube.com/embed/pf9EyKEnml0?si=4gHoHp0DqoKITUkD']
    },
    {
        fecha: new Date(2023, 6, 3),
        ciudad: 'Bilbao',
        sala: 'Santana 27',
        grupo: 'Joe Satriani',
        videos: ['https://www.youtube.com/embed/1U0cl4j5EYI?si=t26wvCOS2Kvcq7EC', 'https://www.youtube.com/embed/eOj3QFACRGQ?si=s607PvDFDafzy6oc','https://www.youtube.com/embed/B8DmZAGy6WU?si=lCh42pSxQ8mbqoR0','https://www.youtube.com/embed/0BMf6U9LfWE?si=PkGew_DG7D-MV1XV','https://www.youtube.com/embed/f14tQpOTZKM?si=PPUxVgko8E7BTxi-','https://www.youtube.com/embed/v6D5PwP-0P4?si=IbmwP3zuxTWkxoWO','https://www.youtube.com/embed/JRBvaa1ELoE?si=UpBUs-NUEf_wa5dx']
    },
    {
        fecha: new Date(2023, 6, 1),
        ciudad: 'Bilbao',
        sala: 'Bilbao Arena',
        grupo: 'Sting',
        videos:['https://www.youtube.com/embed/N9yI45hqoIk?si=Zv3OjBA5sJNFGq9F','https://www.youtube.com/embed/Bvb54eNVkrc?si=BYqJE5IMsHWXfbMz','https://www.youtube.com/embed/GhCa8si6Zv0?si=H0kzaIgE4vtbs7QN','https://www.youtube.com/embed/xntbDGHPxR0?si=ZqXJZ5nP79Oud-K_','https://www.youtube.com/embed/PlJU_ZDwcVE?si=fpkGEU6vMnTlzpTq']
    },
    {
        fecha: new Date(2023, 4, 30),
        ciudad: 'Madrid',
        sala: 'La Riviera',
        grupo: 'Eeels',
        videos:['https://www.youtube.com/embed/23x2-PF2Q_0?si=gMUT2mJn8R7nTUnA','https://www.youtube.com/embed/9xBE9WKq5cE?si=jI4JLmkWcUWBxgHr','https://www.youtube.com/embed/7p5o1Gc-P0c?si=w3Tv3zctwMLugCCB']
    },
    {
        fecha: new Date(2023, 3, 10),
        ciudad: 'Bilbao',
        sala: 'Santana 27',
        grupo: 'Los Chikos del maíz',
        videos:['https://www.youtube.com/embed/VJXd-aB6mJk?si=i8c_e4M9QcWstbcI','https://www.youtube.com/embed/h4zWl1KKMao?si=aBVHeMpasgpAfoDy']
    },
    {
        fecha: new Date(2023, 1, 12),
        ciudad: 'Bilbao',
        sala: 'Kutxa Beltza',
        grupo: 'Gin lady',
        videos:['https://www.youtube.com/embed/NLD7AoCPRFY?si=koMLcWLEivVnUEoo','https://www.youtube.com/embed/QFANfzOmO28?si=Xclwu7376c5AGyNo','https://www.youtube.com/embed/_YqUywIFCEc?si=2Nz44Opnu3FkjQ9U','https://www.youtube.com/embed/XReABkPlVuU?si=6Nj6qK5PmksOFT0x','https://www.youtube.com/embed/K6-F6wpNYeI?si=U_3oaE81z9pCq1W6']
    },
    {
        fecha: new Date(2022, 12, 1),
        ciudad: 'Bilbao',
        sala: 'Santana 27',
        grupo: 'Clutch',
        videos:['https://www.youtube.com/embed/XvSd3SDQLJA?si=1WwTRt1-r5SHk7mk','https://www.youtube.com/embed/zFhOxd-5JOs?si=IoWkdoadRYBSVoLr','https://www.youtube.com/embed/3y1bElKd4u0?si=XbksGFi_QUN1WHW1']
    },
    {
        fecha: new Date(2022, 7, 31),
        ciudad: 'Bilbao',
        sala: 'Bilbao Blues Festival',
        grupo: 'Fantastic Negrito',
        festival: true,
        videos:['https://www.youtube.com/embed/B0jOzOauoWQ?si=A9WEZFt9XFAIx8B4']
    },
    {
        fecha: new Date(2022, 7, 31),
        ciudad: 'Bilbao',
        sala: 'Bilbao Blues Festival',
        grupo: 'Shemekia Copeland',
        festival: true,
        videos:['https://www.youtube.com/embed/eoxVyRS82pM?si=AG0haFZSSCiM5cGO']
    },
    {
        fecha: new Date(2023, 9, 14),
        ciudad: 'Bilbao',
        sala: 'Santana 27',
        grupo: 'Paul Weller',
        videos:['https://www.youtube.com/embed/rvGRm2PMw_s?si=9HnO4UhY42loEUzI','https://www.youtube.com/embed/OezlQsQxbbE?si=UxCI8ORTCRmLa5tT','https://www.youtube.com/embed/ILxhOkFTay8?si=KT8iEf5CkxN2ztK6']
    },
    {
        fecha: new Date(2022, 4, 1),
        ciudad: 'Bilbao',
        sala: 'Santana 27',
        grupo: 'Leon Benavente',
        videos:['https://www.youtube.com/embed/fov1zmaAvbc?si=7q8LKDkGS3hBzHCb','https://www.youtube.com/embed/5AGWkaa3JMU?si=ax1biBIBEKSwHk-C','https://www.youtube.com/embed/H7VWxzKwlBg?si=Elr2IOQCx2BCiG4J','https://www.youtube.com/embed/mRZb1T4-z_U?si=b-wAt_nGP11CZFgh','https://www.youtube.com/embed/aLeQPfc-EiI?si=Aj-iOr9bOB_SmCQt','https://www.youtube.com/embed/Zm49BNUPXxo?si=4S1BdA7jjGkcVVPh']
    },
    {
        fecha: new Date(2021, 11, 12),
        ciudad: 'Basauri',
        sala: 'Antzokia-MAZ Basauri',
        grupo: 'Xoel López',
        festival: true,
        videos:['https://www.youtube.com/embed/Ssg71F5pqLA?si=yI5My4WFI_IhiMRP']
    },
    {
        fecha: new Date(2021, 11, 13),
        ciudad: 'Basauri',
        sala: 'MAZ Basauri',
        grupo: 'Derby Motoreta\'s Burrito Kachimba',
        festival: true,
        videos:['https://www.youtube.com/embed/8n1T0oza92c?si=arFpYCarqybBAyNX','https://www.youtube.com/embed/6Z1DkneZs1M?si=iYgOy0mk_lyx-Du4','https://www.youtube.com/embed/1gOtSuz4_vg?si=__BjiWHG1cjcTXgL']
    },
    {
        fecha: new Date(2023, 8, 21),
        ciudad: 'Bilbao',
        sala: 'Aste Nagusia',
        grupo: 'Lori Meyers',
        videos:['https://www.youtube.com/embed/G4Hd8hzEmQk?si=wgGZdNUnFeZdvNh5']
        
    },
    {
        fecha: new Date(2021, 11, 5),
        ciudad: 'Bilbao',
        sala: 'Bilbao Arena',
        grupo: 'Robe Iniesta',
        videos:['https://www.youtube.com/embed/pEEI6ssTeOQ?si=5tVlfEMx65jsT3l2']
        
    },
    {
        fecha: new Date(2019, 10, 31),
        ciudad: 'Bilbao',
        sala: 'Kafe Antzokia-BIME',
        grupo: 'Jo Goes Hunting',
        festival: true,
        videos:['https://www.youtube.com/embed/gpC7-BvyNW8?si=uoLptZCN-1ivDxnU','https://www.youtube.com/embed/I-AkdtogAQA?si=ADoB6_Jb2QqRhgxo']
    },
    {
        fecha: new Date(2019, 10, 31),
        ciudad: 'Bilbao',
        sala: 'Kafe Antzokia-BIME',
        grupo: 'Thomas Azier',
        festival: true,
        videos:['https://www.youtube.com/embed/ZC6gBD-Cfvs?si=m8FPJE9SM8QpBFbh','https://www.youtube.com/embed/Y2bdQZb9j14?si=wUf67ROzCiTmCBaX','https://www.youtube.com/embed/85JwXUNY8GI?si=6YdtugrXcL7AfGa3']
    },
    {
        fecha: new Date(2019, 10, 31),
        ciudad: 'Bilbao',
        sala: 'Kafe Antzokia-BIME',
        grupo: 'Someone',
        festival: true,
        videos:['https://www.youtube.com/embed/PlWYa84duAg?si=_hDzw3XRK4mnnGeZ','https://www.youtube.com/embed/B5D0CSKB9K4?si=LAjKJE42MUT7Q20Z']
    },
    {
        fecha: new Date(2019, 10, 21),
        ciudad: 'Bilbao',
        sala: 'Kafe Antzokia',
        grupo: 'White Lies',
        videos:['https://www.youtube.com/embed/p5Du4y-cDAQ?si=p7tEp1_cXJzZksDY','https://www.youtube.com/embed/QPf0pGTJLi0?si=8Io8WM9jvNU8iTPU','https://www.youtube.com/embed/F2MMfad-8XM?si=5M6Nixb0Z4Vuea0M','https://www.youtube.com/embed/2hyzsCy1iSE?si=iGsbZhojYjF8dMX5','https://www.youtube.com/embed/-jtjAC7a5F4?si=jh8LjGiVHUcTB7uR']
    },
    {
        fecha: new Date(2019, 5, 18),
        ciudad: 'Bilbao',
        sala: 'Kafe Antzokia',
        grupo: 'Los Zigarros',
        videos:['https://www.youtube.com/embed/oqSpZP1fP_4?si=5MqOrCpnFLEX4R97','https://www.youtube.com/embed/6m7a_I7L3UM?si=86FgDGYXo4tmDyL5','https://www.youtube.com/embed/8e37agpcVfQ?si=gSrVCRue9eOU-moO','https://www.youtube.com/embed/zGVaXRdzQxQ?si=mELNnPB5eblbNulS']
    },
    {
        fecha: new Date(2019, 4, 20),
        ciudad: 'Bilbao',
        sala: 'Kafe Antzokia-Basque Fest',
        grupo: 'James Room & Weird Antiqua',
        festival: true,
        videos:['https://www.youtube.com/embed/JNkg38SQC6s?si=tgjtaX0_9TNsbJ9I','https://www.youtube.com/embed/dH7B7TADjsQ?si=3K1XJMD8A35_oXHa','https://www.youtube.com/embed/bCibjpII6D4?si=BRcE3BIpTmuUUPGb']
    },
    {
        fecha: new Date(2019, 4, 20),
        ciudad: 'Bilbao',
        sala: 'Kafe Antzokia-Basque Fest',
        grupo: 'Mississippi Queen & The Wet Dogs',
        festival: true,
        videos:['https://www.youtube.com/embed/TJW1e1LD-U0?si=Ah9MRNcbV3dUtXKa']
    },
    {
        fecha: new Date(2019, 4, 20),
        ciudad: 'Bilbao',
        sala: 'Azkena',
        grupo: 'Diavlo',
        videos:['https://www.youtube.com/embed/YhwlNTRlo0k?si=Fl8GGR4Bp748pSfW']
    },
    {
        fecha: new Date(2018, 11, 3),
        ciudad: 'Bilbao',
        sala: 'San Mames',
        grupo: 'Muse',
        videos:['https://www.youtube.com/embed/xZCGYluPj5Q?si=iQOhQodZoetQhyVJ']
    },
    {
        fecha: new Date(2018, 8, 24),
        ciudad: 'Bilbao',
        sala: 'Aire Libre-Aste Nagusia',
        grupo: 'Santiago Auserón',
        videos:['https://www.youtube.com/embed/mOJJ4nGkHgs?si=GvM3S2aZPLHYYYDF']
    },
    {
        fecha: new Date(2018, 10, 11),
        ciudad: 'Bilbao',
        sala: 'Kafe Antzokia',
        grupo: 'Morgan',
        videos:['https://www.youtube.com/embed/izOCKYVKNXo?si=ctjrXqh62u5Z1-cn','https://www.youtube.com/embed/JCqu_ZjFf4Q?si=UkQL49OzvTdU-_-Q','https://www.youtube.com/embed/F54RnPaFniE?si=BCdghKbSjjVwf3mV']
    },
    {
        fecha: new Date(2018, 5, 11),
        ciudad: 'Bilbao',
        sala: 'Santana 27',
        grupo: 'Monster Magnet',
        videos:['https://www.youtube.com/embed/z-noysya98g?si=rGgxO8bryOpgCkO2','https://www.youtube.com/embed/Nw0_6Q_TFFI?si=57xWUIAKURCK-qxF']
    },
    {
        fecha: new Date(2018, 5, 11),
        ciudad: 'Bilbao',
        sala: 'Santana 27',
        grupo: 'Pendejo',
        videos:['https://www.youtube.com/embed/kG1f8vNxAjI?si=5Qjb4EOo2NqPKa2N']
    },
    {
        fecha: new Date(2018, 4, 28),
        ciudad: 'Basauri',
        sala: 'Antzokia-MAZ Basauri',
        grupo: 'Sidonie',
        festival: true,
        videos:['https://www.youtube.com/embed/Q_I_c9oOHTg?si=ecaXNwRY-BjR2pmI']
    },
    {
        fecha: new Date(2018, 4, 28),
        ciudad: 'Basauri',
        sala: 'Antzokia-MAZ Basauri',
        grupo: 'Rufus T. Firefly',
        festival: true,
        videos:['https://www.youtube.com/embed/9cE1Imji6Gs?si=j0RGiUn8dL4-sMTq','https://www.youtube.com/embed/BqdQD5zsV8M?si=YjrT1p9Xd9UYLmme']
    },
    {
        fecha: new Date(2018, 4, 14),
        ciudad: 'Bilbao',
        sala: 'Stage Live',
        grupo: 'Mi Capitán', 
        videos:['https://www.youtube.com/embed/DyCt15JrTHs?si=56otubOT8CboNWT5','https://www.youtube.com/embed/KovlbQ9VRMw?si=47fSk7bknskelWQY','https://www.youtube.com/embed/Ww-P02LT7n8?si=tsRtpHW1qy4my4NM','https://www.youtube.com/embed/DacEgxdczmU?si=R5Rg6SESd7nLpKaV','https://www.youtube.com/embed/bjy8nb2zvlo?si=KViuSPqslmXtbd-w','https://www.youtube.com/embed/iFqBsLfpSes?si=08T9vNIofIIx4uyN','https://www.youtube.com/embed/GWBLM7NNIXY?si=xOYXAhJ_tWlHkO-C']
    },
    {
        fecha: new Date(2018, 4, 7),
        ciudad: 'Bilbao',
        sala: 'Satelite T',
        grupo: 'Los DelTonos', 
        videos:['https://www.youtube.com/embed/zAsgemLIzrY?si=Fq7ORbmhef3jEiwf','https://www.youtube.com/embed/1YTGMN5NtE8?si=r6_FvwCzcLMWXzaD']
    },
    {
        fecha: new Date(2018, 3, 31),
        ciudad: 'Bilbao',
        sala: 'La Alhondiga',
        grupo: 'Ruper Ordorika',
        videos:['https://www.youtube.com/embed/2rEVul3PgkI?si=9sTeiaSONi7fNqOi']
    },
    {
        fecha: new Date(2018, 3, 16),
        ciudad: 'Durango',
        sala: 'Plateruena',
        grupo: 'Seiurte',
        videos:['https://www.youtube.com/embed/nX5R_r6nPwE?si=VDUPSj3qWXMWNOFn']
    },
    {
        fecha: new Date(2018, 3, 16),
        ciudad: 'Durango',
        sala: 'Plateruena',
        grupo: 'Luis Brea',
        videos:['https://www.youtube.com/embed/9dZs3juDN8g?si=af1omRb48EchiGo6','https://www.youtube.com/embed/nzbxZbcor2M?si=1lE1Is6L6O-burvP']
    }
];