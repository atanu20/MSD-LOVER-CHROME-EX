let msd=[
    "https://i.pinimg.com/originals/93/b2/91/93b2912b59a6d00d161e3bac1f1400eb.jpg",
    "https://pbs.twimg.com/profile_images/1216235772396724224/vfKrKTN8_400x400.jpg",
    "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2020/08/15/879376-msd-2.gif",
    "https://i.pinimg.com/originals/34/4e/b0/344eb045311a8f04a8ff3d6bc4b7d3fe.jpg",
    "https://pbs.twimg.com/media/DgbTRoKWAAECEwg.jpg"
];

const imgs=document.getElementsByTagName("img")
for (let i=0;i<imgs.length; i++)
{
    const randomimg=Math.floor(Math.random() * msd.length)
    imgs[i].src=msd[randomimg]
}

const headers=document.getElementsByTagName("h3")
for (let i=0;i<headers.length; i++)
{
    headers[i].innerText="MSD LOVER";
}