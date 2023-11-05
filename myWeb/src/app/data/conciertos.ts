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
        sala: 'MAZ Basauri',
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
        
    }
];