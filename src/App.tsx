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
          fontSize: "85px",
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
      initial={{ x: 10 }}
      whileHover={{ x: -400 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        color: "black",
        fontSize: "256px",
        display: "inline-block",
        whiteSpace: "nowrap",
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
    <div style={{ marginTop: "-32px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "80px",
          marginBottom: "-128px",
        }}
      >
        --- sns ---
      </div>
      <div
        style={{
          flexDirection: "column",
          overflowX: "hidden",
          overflowY: "hidden",
          lineHeight: "-256px",
          marginTop: "128px",
          width: "100%",
        }}
      >
        <Link href="https://twitter.com/ggeyegg">👉 X, Twitter</Link>
        <Link href="http://instagram.com/eggeyegge">👉 Instagram</Link>
        <Link href="https://www.youtube.com/@eggeyegge">👉 Youtube</Link>
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

const useProgressiveImage = (src: string) => {
  const [sourceLoaded, setSourceLoaded] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    setSourceLoaded(null);
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};

function RandomImage() {
  const [clock, setClock] = useState(0);
  const [curImg, setCurImg] = useState("/random/0196.png");
  const [size, setSize] = useState(24);
  const loaded = useProgressiveImage(curImg);
  const onNewImg = () => {
    const randomIndex = Math.floor(Math.random() * randomImgs.length);
    const randomSize = Math.floor(Math.random() * 24) + 4;
    setCurImg(randomImgs[randomIndex]);
    setSize(randomSize);
  };

  useEffect(() => {
    const id = setInterval(() => {
      onNewImg();
    }, 5000);
    // 30 fps
    const clockId = setInterval(() => {
      setClock((prev) => prev + 1);
    }, 1000 / 60);
    return () => {
      clearInterval(id);
      clearInterval(clockId);
    };
  }, []);

  return (
    <div style={{ margin: "16px" }}>
      <motion.div
        style={{
          height: "512px",
          width: "100%",
          marginTop: "16px",
          backgroundImage: `url(${loaded || "/rainbow.png"})`,
          backgroundRepeat: "repeat",
          backgroundSize: `${size}rem`,
          backgroundPosition: `${clock * 2}px ${clock * 2}px`,
        }}
      />
    </div>
  );
}

const displayHackerDefenceConsole = () => {
  const consoleText = `?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿`;
  console.log(
    `%c${consoleText}`,
    "background-color: #8bffd6; color: white; font-size: 24px; border-radius: 8px; padding: 8px;"
  );
};

function App() {
  useEffect(() => {
    displayHackerDefenceConsole();
  }, []);
  return (
    <div
      style={{
        fontFamily: "Rubik Lines, Transparent",
        maxWidth: "500px",
        backgroundColor: "white",
      }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&family=Rubik+Lines&family=Sixtyfour&display=swap"
        rel="stylesheet"
      />
      <div style={{ height: "32px" }}></div>
      <Header />
      <RandomImage />
      <SNS />
      <div style={{ height: "64px" }}></div>
    </div>
  );
}

export default App;
