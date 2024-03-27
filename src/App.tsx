import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";

const randomImgs = [
  "/random/boxod5.png",
  "/random/ascii-sun1.png",
  "/random/0497.png",
  "/random/kushi4.png",
  "/random/plus-minus.png",
  "/random/0047.png",
  "/random/kirakira-asciiii2.png",
  "/random/0269.png",
  "/random/kirakira-asciiii.png",
  "/random/0302.png",
  "/random/kushi3.png",
  "/random/0309.2024.png",
  "/random/bit-angel3.png",
  "/random/0060.png",
  "/random/hands.png",
  "/random/hold.png",
  "/random/sheep1.png",
  "/random/kushi2.png",
  "/random/dream-rabicat.png",
  "/random/boxod3.png",
  "/random/ANGEL.png",
  "/random/0155.png",
  "/random/0010.png",
  "/random/twin-hold3.png",
  "/random/0196.png",
  "/random/math-dream.png",
  "/random/ascii-nap3.png",
  "/random/nekoneko1.png",
  "/random/boxod4.png",
  "/random/sheep6.png",
  "/random/bit-angel.png",
  "/random/sheep4.png",
  "/random/ascii-sun2.png",
  "/random/ascii-nap1.png",
  "/random/boxod2.png",
  "/random/human-room.png",
  "/random/0194.png",
  "/random/kushi1.png",
  "/random/0445.png",
  "/random/0025.png",
  "/random/random-dream.png",
  "/random/sheep8.png",
  "/random/A7M2-A7M3.png",
];

function Header() {
  const [videoSrc, setVideoSrc] = useState("");
  useEffect(() => {
    const srcs = ["/video1.mov"];
    const randomIndex = Math.floor(Math.random() * srcs.length);
    setVideoSrc(srcs[randomIndex]);
  }, []);
  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-8px",
        marginBottom: "-8px",
      }}
    >
      <motion.div
        className="header-video-container"
        initial={{ scaleX: 1.0, scaleY: 0 }}
        whileTap={{ scaleY: 10 }}
        animate={{
          scaleY: 1.0,
        }}
      >
        <video
          src={videoSrc}
          autoPlay
          loop
          playsInline
          muted
          width={420}
          style={{
            marginLeft: "8px",
            marginTop: "8px",
            objectFit: "cover",
            marginBottom: "-8px",
          }}
        />
      </motion.div>
      <div
        className="header-smartphone-container"
        style={{
          marginTop: "0px",
          justifyContent: "center",
          fontSize: "48px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        @ggeyegg
      </div>
    </motion.div>
  );
}

function Link({ children, href }: { children: any; href: string }) {
  return (
    <motion.a
      initial={{ scale: 1.0 }}
      whileHover={{ scale: 1.25 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        marginLeft: "8px",
        color: "white",
        backgroundColor: "lightgreen",
        fontSize: "20px",
        textDecoration: "underline",
        fontWeight: "normal",
      }}
    >
      {children}
    </motion.a>
  );
}

function Subtitle({ title }: { title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "32px",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "inline-block" }}>?¿?¿ {title} ?¿?¿</div>
    </div>
  );
}

function SoundCloudLinkCard({
  imgSrc,
  href,
  title,
}: {
  imgSrc?: string;
  href: string;
  title: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "8px",
      }}
    >
      <img src={imgSrc} width={32} height={32} />
      <Link href={href}>{title}</Link>
    </div>
  );
}

function SNS() {
  return (
    <div
      style={{ display: "flex", paddingTop: "8px", flexDirection: "column" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        --- sns ---
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Link href="https://twitter.com/ggeyegg">鳥 twitter</Link>
        <Link href="http://instagram.com/eggeyegge">印 instagram</Link>
        <Link href="http://twitter.com/@eggeyegge">妖 youtube</Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        ------------
      </div>
    </div>
  );
}

function Description() {
  return (
    <div
      style={{
        marginLeft: "16px",
        marginRight: "16px",
      }}
    ></div>
  );
}

function RandomImage() {
  const [curImg, setCurImg] = useState("/random/hands.png");
  const [isLoaded, setIsLoaded] = useState(false);
  const [rndstr, setRndstr] = useState("");
  const shuffleStr = () => {
    const str1 = "?";
    const str2 = "¿";
    // all, 24 strs
    const strs = [];
    for (let i = 0; i < 24; i++) {
      // random vle
      const rnd = Math.random();
      if (rnd < 0.5) {
        strs.push(str1);
      } else {
        strs.push(str2);
      }
    }
    const str = strs.join("");
    setRndstr(str);
  };
  useEffect(() => {
    const id = setInterval(() => {
      shuffleStr();
    }, 50);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div style={{ margin: "16px" }}>
      <motion.img
        src={curImg}
        style={{
          width: "100%",
          objectFit: "cover",
          marginTop: "16px",
          display: isLoaded ? "block" : "none",
        }}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
      {!isLoaded && (
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 2.0 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            width: "100%",
            fontSize: "30px",
          }}
        >
          loading...
        </motion.div>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <motion.button
          whileHover={{
            filter: "hue-rotate(720000deg)",
          }}
          style={{
            borderRadius: "0px",
            backgroundColor: "lightgreen",
            color: "white",
            marginTop: "16px",
          }}
          onClick={() => {
            const randomIndex = Math.floor(Math.random() * randomImgs.length);
            setCurImg(randomImgs[randomIndex]);
            setIsLoaded(false);
          }}
        >
          {"=>"} {rndstr} {`<=`}
        </motion.button>
      </div>
    </div>
  );
}

const displayHackerDefenceConsole = () => {
  const consoleText = `?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿`;
  console.log(
    `%c${consoleText}`,
    "background-color: rgb(255, 164, 244); color: white; font-size: 24px; border-radius: 8px; padding: 8px;"
  );
};

function App() {
  useEffect(() => {
    displayHackerDefenceConsole();
  }, []);
  return (
    <div
      style={{
        fontFamily: "Iosevka Aile Iaso, Transparent",
        maxWidth: "500px",
        fontSize: "18px",
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <link
        rel="stylesheet"
        href="https://cdn.xeiaso.net/static/css/iosevka/family.css"
      />
      <SNS />
      <Header />
      <RandomImage />
      <Description />
    </div>
  );
}

export default App;
