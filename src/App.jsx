import styles from './app.module.css'
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';

import banner from './assets/banner.jpg'
import album from './assets/eodAlbum.jpg'
import shadow from './assets/eodShadow.jpg'
import placeholder from './assets/verticalPlaceholder.jpg'
import emblem from './assets/eodEmblem.png'
import logo from './assets/eodLogo.png'

import necro from './assets/images/necro.jpg'
import mynoghra from './assets/images/mynoghra.jpg'
import absence from './assets/images/absence.jpg'
import gravekeeper from './assets/images/gravekeeper.jpg'
import akhenaken from './assets/images/akhenaken.jpg'
import apollyon from './assets/images/apollyon.jpg'
import yb from './assets/images/yb.jpg'

import eod1 from './assets/images/eod1.jpg'
import eod2 from './assets/images/eod2.jpg'
import eod3 from './assets/images/eod3.jpg'
import eod4 from './assets/images/eod4.jpg'
import eod5 from './assets/images/eod5.jpg'
import eod6 from './assets/images/eod6.jpg'
import eod7 from './assets/images/eod7.jpg'
import eod8 from './assets/images/eod8.jpg'
import eod9 from './assets/images/eod9.jpg'
import eod10 from './assets/images/eod10.jpg'
import eod11 from './assets/images/eod11.jpg'
import eod12 from './assets/images/eod12.jpg'
import eod13 from './assets/images/eod13.jpg'
import eod14 from './assets/images/eod14.jpg'
import eod15 from './assets/images/eod15.jpg'
import eod16 from './assets/images/eod16.jpg'

import band from './assets/images/band.jpg'

import live1 from './assets/images/live1.png'
import live2 from './assets/images/live2.png'
import live3 from './assets/images/live3.jpg'
import live4 from './assets/images/live4.jpg'
import live5 from './assets/images/live5.jpg'
import live6 from './assets/images/live6.jpg'
import live7 from './assets/images/live7.jpg'
import live8 from './assets/images/live8.png'
import live9 from './assets/images/live9.jpg'

function App() {
  const { t } = useTranslation()

  const memebersData = [
    {id: 1234123, name: 'Necro', role: 'Vocals', image: necro},
    {id: 1242421, name: 'Mynoghra', role: 'Vocals', image: mynoghra},
    {id: 6345634, name: 'Abscense', role: 'Guitar', image: absence},
    {id: 4567456, name: 'GraveKeeper', role: 'Guitar', image: gravekeeper},
    {id: 2345234, name: 'Akhenaten', role: 'Keys', image: akhenaken},
    {id: 6789678, name: 'Apollyon', role: 'Bass', image: apollyon},
    {id: 1234123, name: 'Y.B.', role: 'Drums', image: yb}
  ]

  const discographyData = [
    {
      id: 5795867,
      image: album,
      url: "https://endofdawn.bandcamp.com/album/primordial-darkness",
      title: "Primordial Darkness",
      type: "Full Length",
      date: "15 / 11 / 2024",
      label: "WormHoleDeath"
    },
    {
      id: 1345236,
      image: shadow,
      url: "https://endofdawn.bandcamp.com/track/shadow", 
      title: "Shadow",
      type: "Single",
      date: "18 / 10 / 2024",
      label: "Independent"
    },
  ]

    const showsData = [
    {
      id: 7938170,
      image: live9,
      url: "https://www.facebook.com/events/634749312780087",
      title: "Frequency of Illusion Release Show",
      bands: "Flames / End of Dawn / Mallevs",
      date: "07 / 12 / 2025",
      location: "Eightball, Thessaloniki"
    },
    {
      id: 1086739,
      image: live8,
      url: "https://www.facebook.com/events/2485658904972489/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D", 
      title: "Golden R. Festival",
      bands: "Old Man's Child / God Dethroned / Lucifer's Child / Reflection / Exilium Noctis / Powercross / End of Dawn / Illusive Mirrors",
      date: "30 / 08 / 2025",
      location: "Nea Achialos, Volos"
    },
    {
      id: 5167028,
      image: live7,
      url: "https://www.facebook.com/events/1912691492597333/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D",
      title: "Primordial Darkness Release Show",
      bands: "End of Dawn / Likno / Aesemina",
      date: "08 / 05 / 2025",
      location: "Eightball, Thessaloniki"
    },
    {
      id: 5380196,
      image: live6,
      url: "https://www.facebook.com/events/918036716781146/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D", 
      title: "Ritual of The Black Mass",
      bands: "Fovitron / End of Dawn / Grotesco Karma / Archegon",
      date: "28 / 02 / 2025",
      location: "Architektoniki, Athens"
    },
    {
      id: 4187692,
      image: live5,
      url: "https://www.facebook.com/events/1111632866984593/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D", 
      title: "Dawn With No Light Release Show",
      bands: "Ignominus / Exilium Noctis / End of Dawn",
      date: "14 / 12 / 2024",
      location: "Eightball, Thessaloniki"
    },
    {
      id: 1790235,
      image: live4,
      url: "https://www.facebook.com/events/711955963937492/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D", 
      title: "Brazilian Attack Over Thessaloniki",
      bands: "Sextrash / Outlaw / Freefall / End of Dawn",
      date: "17 / 02 / 2024",
      location: "Eightball, Thessaloniki"
    },
    {
      id: 8190251,
      image: live3,
      url: "https://www.facebook.com/events/561143139480525/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D", 
      title: "Nightfall Upon Thessaloniki",
      bands: "Drama Noir / Temple of Katharsis / End of Dawn",
      date: "26 / 01 / 2024",
      location: "Eightball, Thessaloniki"
    },
    {
      id: 6190361,
      image: live2,
      url: "https://www.facebook.com/events/1521234788683449/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D", 
      title: "Headspin Festival",
      bands: "End of Dawn / Delta Point / 9F / Opium",
      date: "4 / 11 / 2023",
      location: "Eightball, Thessaloniki"
    },
    {
      id: 9103610,
      image: live1,
      url: "https://www.facebook.com/events/128779350143956/?acontext=%7B%22event_action_history%22%3A[%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D", 
      title: "Unholy Gathering of Dark Sonance",
      bands: "Fovitron / End of Dawn / Asfodelos",
      date: "20 / 05 / 2023",
      location: "Eightball, Thessaloniki"
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.bannerOverlay}>
        <h1>End of Dawn</h1>
        <h2>Electronic Press Kit</h2>
      </div>
      
      <Slider {...settings}>
        <img className={styles.bannerImage} src={eod1} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod2} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod3} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod4} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod5} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod6} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod7} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod8} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod9} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod10} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod11} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod12} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod13} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod14} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod15} alt="eod-header-image"/>
        <img className={styles.bannerImage} src={eod16} alt="eod-header-image"/>
      </Slider>

      <section className={styles.infoSection}>
        <h2>End of Dawn | Symphonic/Gothic Black Metal</h2>

        <div className={styles.horizontalContainer}>
          <iframe data-testid="embed-iframe" style={{borderRadius: "1rem"}} src="https://open.spotify.com/embed/track/2uXsPSS3GOSHXS3gdTfY4t?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe data-testid="embed-iframe" style={{borderRadius: "1rem"}} src="https://open.spotify.com/embed/track/0zrgJ7JtlXC7yrRzdx4EVH?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe data-testid="embed-iframe" style={{borderRadius: "1rem"}} src="https://open.spotify.com/embed/track/3VXVxmrCv30tX9wULttpOs?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </section>

      <section className={styles.infoSection}>
        <h2>Biography</h2>

        <div className={styles.horizontalContainer}>
          <img className={styles.bioUnderlay} src={emblem}/>
          
          <div>
            <img className={styles.bioImage} src={band} alt="eod-bio-image"/>
          </div>

          <div className={styles.bioTextContainer}>
            {/* <h2>Biography</h2> */}

            <p>{t("bioText1")}</p>
            <p>{t("bioText2")}</p>
            <p>{t("bioText3")}</p>
          </div>
        </div>
      </section>

      <section className={styles.lineupSection}>
        <h2>Line Up</h2>

        <div className={styles.horizontalMemberContainer}>
          {memebersData.map(member => 
            <div key={member.id} className={styles.memberCardContainer}>
              <div className={styles.memberTitle}>
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
              </div>

              <img className={styles.memberImage} src={member.image} alt="eod-bio-image"/>
            </div>
          )}
        </div>
      </section>

      <section>
        <h2>Discography</h2>

        <ul className={styles.discographyList}>
          {discographyData.map(data => 
            <li key={data.id} onClick={() => window.open(data.url, `__blank${data.id}`)}>
              <img src={data.image}/>

              <div>
                <strong>{t("title")}:</strong>
                <strong>{t("type")}:</strong>
                <strong>{t("releaseDate")}:</strong>
                <strong>{t("label")}:</strong>
              </div>

              <div>
                <p>{data.title}</p>
                <p>{data.type}</p>
                <p>{data.date}</p>
                <p>{data.label}</p>
              </div>
            </li>
          )}
        </ul>
      </section>

      <section>
        <h2>Live Shows</h2>

        <ul className={styles.discographyList}>
          {showsData.map(data => 
            <li key={data.id} onClick={() => window.open(data.url, `__blank${data.id}`)}>
              <img src={data.image}/>

              <div>
                <strong>{data.title}</strong>
                <p>{data.bands}</p>
                <p>{data.date}</p>
                <p>{data.location}</p>
              </div>
            </li>
          )}
        </ul>
      </section>

      <footer className={styles.footerSection}>
        <img src={logo} onClick={() => window.scrollTo({top:0, behavior: 'smooth'})}/>

        <div className={styles.footerInfoSection}>
          <div className={styles.footerInfoContainer}>
            <h3>Social Media</h3>
            <p onClick={() => window.open('https://www.instagram.com/endofdawnofficial/', `__blank_instagram`)}>Instagram</p>
            <p onClick={() => window.open('https://www.facebook.com/endofdawnofficial/', `__blank_facebook`)}>Facebook</p>
          </div>

          <div className={styles.footerInfoContainer}>
            <h3>Streaming Platforms</h3>
            <p onClick={() => window.open('https://open.spotify.com/artist/03GS0Jd0J7nEJv1Ra3idkS?si=QwyBftcGQMCJKrGqo7ojrg', `__blank_spotify`)}>Spotify</p>
            <p onClick={() => window.open('https://www.youtube.com/@EndofDawn.official', `__blank_youtube`)}>Youtube</p>
            <p onClick={() => window.open('https://endofdawn.bandcamp.com/', `__blank_bandcamp`)}>Bandcamp</p>
          </div>


          <div className={styles.footerInfoContainer}>
            <h3>Contact</h3>
            <p onClick={() => window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGMhkbGcxsmPcncBJkDRQpptfGfdNCZDnjgbwgLCvxGKSZSdwhPcxZTwfKLSjSXWQqFvvCP', `__blank_gmail`)}>endofdawn@gmail.com</p>
            <p>6969696969</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
