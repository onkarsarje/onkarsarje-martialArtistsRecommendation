import React, { useState } from "react";
import "./styles.css";

var color = "#F87171";

const MartialArtsDB = {
  Kalaripayattu: [
    {
      name: "Vidyut Jammwal ",
      image:
        "https://i.pinimg.com/564x/1c/0c/a8/1c0ca883f98c7b4d98f7081bbe603d39.jpg",
      instagram: "https://www.instagram.com/mevidyutjammwal/"
    },
    {
      name: "Meenakshi Amma",
      image:
        "https://indusscrolls.com/wp-content/uploads/2020/05/meenakshiamma1.jpg.image_.784.410.jpg",
      instagram: "https://en.wikipedia.org/wiki/Meenakshi_Amma"
    },
    {
      name: "Grandmaster Shifuji",
      image:
        "https://wikibio.in/wp-content/uploads/2019/02/Grandmaster-Shifuji-Shaurya-Bhardwaj.jpg",
      instagram: "https://www.instagram.com/shifuji_jaihind/?hl=en"
    },
    {
      name: "Ayodhana Kalari Academy",
      image:
        "https://scontent.fpnq7-3.fna.fbcdn.net/v/t1.6435-9/80421150_108647237305729_6635863466051633152_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RXWipT1aeowAX9mx2z6&_nc_ht=scontent.fpnq7-3.fna&oh=58fcf41a6f9dce569b985bee1ade329a&oe=6164E15D",
      instagram: "https://www.instagram.com/ayodhanakalari/"
    }
  ],
  MMA: [
    {
      name: "Dustin Poirier ",
      image:
        "https://cdn.vox-cdn.com/thumbor/f-XjkhZkltuakTiQWa_eMwKwXmw=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19174723/139_Dustin_Poirier.jpg",
      instagram: "https://www.instagram.com/dustinpoirier/"
    },
    {
      name: "Israel Adesanya",
      image:
        "https://img.bleacherreport.net/img/images/photos/003/906/001/hi-res-387aa4c7b8fa8bd71f0a8a1af0119efc_crop_exact.jpg?w=1200&h=1200&q=75",
      instagram: "https://www.instagram.com/stylebender/"
    },
    {
      name: "Holly Holm",
      image:
        "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2015%2F1115%2Fr25898_1296x729_16%2D9.jpg",
      instagram: "https://www.instagram.com/hollyholm/"
    },
    {
      name: "Rose Namajunas",
      image:
        "https://cdn.vox-cdn.com/thumbor/4PuyS4wLUitTLFhUP8rTT7OdyBg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22468867/1232508691.jpg",
      instagram: "https://www.instagram.com/rosenamajunas/"
    }
  ],
  Karate: [
    {
      name: "Ryo Kiyuna",
      image:
        "https://www.tokyoweekender.com/wp-content/uploads/2019/08/Screen-Shot-2019-08-16-at-11.05.30-AM.png",
      instagram: "https://www.instagram.com/ryo_kiyunaa/"
    },
    {
      name: "Damián Quintero",
      image:
        "https://gtimg.tokyo2020.org/image/private/f_auto,t_article-lead-image-desktop/production/f3bsrrkmydrlznsmma2l",
      instagram: "https://www.instagram.com/damianquintero/"
    },
    {
      name: "Kiyou Shimizu",
      image:
        "https://firstsportz.com/wp-content/uploads/2021/07/pjimage-11-2-696x392.jpg",
      instagram: "https://www.instagram.com/kiyou_1/?hl=en"
    },
    {
      name: "Sandra Sánchez",
      image:
        "https://www.wkf.net/imagenes/noticias/interna-noticia20210630121532.jpg",
      instagram: "https://www.instagram.com/sandrasankarate/"
    },
    {
      name: "Rafael Aghayev",
      image:
        "https://www.wkf.net/imagenes/noticias/getting-to-know-karate-stars-rafael-aghayev-legendary-champion-chasing-the-olympic-dream-768.jpg",
      instagram: "https://www.instagram.com/aghayev_rafael/?hl=en"
    }
  ],
  MuayThai: [
    {
      name: "Buakaw Banchamek",
      image:
        "https://lh3.googleusercontent.com/proxy/-CZfEijlKWUbDLogD_iE5oAnsBACKa2IYAbHsyPpZQSzQA7E4-1adgkJRbDEhu-ARzPXIFrlmcPWXiPdNWM_M2QYBejrZw9JlYRL0dpfle473R1cR05wFm22T6HvyQ",
      instagram: "https://www.instagram.com/buakaw1/"
    },
    {
      name: "Rodtang Jimungnon",
      image:
        "https://cdn.asianmma.com/wp-content/uploads/2019/01/Rodtang-Jitmuangnon-celebrate.jpg",
      instagram: "https://www.instagram.com/rodtang_jimungnon/"
    },
    {
      name: "Liam Harrison",
      image:
        "https://cdn.asianmma.com/wp-content/uploads/2020/01/Liam-HArrison.jpg",
      instagram: "https://www.instagram.com/liambadco/"
    },
    {
      name: "Stamp Fairtex",
      image:
        "https://cdn.onefc.com/wp-content/uploads/2020/01/Stamp-Fairtex-defeats-Puja-Tomar-at-ONE-A-NEW-TOMORROW-DC-2435.jpg",
      instagram: "https://www.instagram.com/stamp_fairtex/"
    },
    {
      name: "Nat Jaroonsak",
      image:
        "https://www.onefc.com/wp-content/uploads/2020/08/Wondergirl-Fairtex-Brooke-Farrell-NS3-1920X1280-22-600x400.jpg",
      instagram: "https://www.instagram.com/natwondergirl/"
    }
  ],
  Boxing: [
    {
      name: "Manny Pacquiao",
      image: "https://pbs.twimg.com/media/E9W3nS5VkAAtpSh.jpg",
      instagram: "https://www.instagram.com/mannypacquiao/"
    },
    {
      name: "Naoya Inoue",
      image:
        "https://ssio.azurewebsites.net/x500,q75,jpeg/http://supersport-img.azureedge.net/2020/11/Naoya-Inoue-A-201101G1050.jpg",
      instagram: "https://www.instagram.com/naoyainoue_410/"
    },
    {
      name: "Vasyl Lomachenko",
      image: "https://pbs.twimg.com/media/EDXdUC4XoAAJp_e.jpg",
      instagram: "https://www.instagram.com/lomachenkovasiliy/"
    },
    {
      name: "Canelo Alvarez",
      image:
        "https://site-cdn.givemesport.com/images/21/04/21/5d3a92b43e816f788ac298d5d4e6b156/1204.jpg",
      instagram: "https://www.instagram.com/canelo/"
    },
    {
      name: "Floyd Mayweather",
      image:
        "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2020/08/floyd-mayweather-2017.jpg?w=1000&h=600&crop=1",
      instagram: "https://www.instagram.com/floydmayweather/"
    }
  ]
};

export default function App() {
  const [martialArt, setMartialArt] = useState("Kalaripayattu");

  function clickHandler(martialArt) {
    setMartialArt(martialArt);
  }

  return (
    <div className="App">
      <div className="header">
        <h1 style={{ backgroundColor: color }}>
          🥋Martial Artists Recommendations🥊
        </h1>
        <h2>
          Hey... Exploring Martial Arts and Martial Artists? Check my app to
          find out Elites in their Arts.
        </h2>

        <div className="button_container">
          {Object.keys(MartialArtsDB).map((martialArt) => (
            <button
              key={martialArt}
              className="button"
              onClick={() => clickHandler(martialArt)}
            >
              {martialArt}
            </button>
          ))}
        </div>

        {MartialArtsDB[martialArt].map((art) => (
          <div className="artist" key={art.name}>
            <img
              className="artist_image"
              src={art.image}
              alt=""
              class="responsive"
            />
            <h1 className="artist_name"> {art.name}</h1>
            <div className="artist_info"></div>
          </div>
        ))}
        {/* </div> */}
        <div className="footer">
          Created for education purpose using React by Onkar Sarje
        </div>
      </div>
    </div>
  );
}
