"use client";

import AnimatedLogo from "@/components/animated-logo";
import Card from "@/components/card";
import Modal from "@/components/modal";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { MdOutlineVideoLibrary } from "react-icons/md";

export default function Home() {
  const [welcomeVideoOpen, setWelcomeVideoOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlaying(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (playing && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Pode falhar se o navegador bloquear autoplay com som (mas você tem muted)
      });
    }
  }, [playing]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const forceScroll = setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);

    document.body.style.overflow = "hidden";

    const unlockScroll = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 3500);

    return () => {
      clearTimeout(forceScroll);
      clearTimeout(unlockScroll);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center p-4 mb-8">
      <AnimatedLogo />
      <section
        id="hero-container"
        className="flex flex-col items-center gap-3 p-4"
      >
        <h1 className="text-gray-600 font-semibold text-xl sm:text-4xl text-center">
          Bem-vindo ao seu Clube de Café da Manhã Econômico!
        </h1>
        {/* <div className="relative w-full max-w-[600px] aspect-video my-6 shadow-card rounded-sm">
          <iframe
            src="https://www.youtube.com/embed/_ajmV4cogg4?si=RFQQBBQ7dHiYcGFH"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-sm"
          ></iframe>
        </div> */}

        <div className="relative w-full max-w-[600px] aspect-video my-6 shadow-card rounded-sm overflow-hidden">
          <video
            src="video/welcome.mp4"
            autoPlay={playing}
            muted
            controls
            width="100%"
            height="100%"
            controlsList="nodownload"
            playsInline
            ref={videoRef}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        <div className="w-full flex flex-col gap-8 max-w-[80%]">
          <div className="relative flex justify-center items-center my-4">
            <div className="h-[1px] w-full border-t border-dashed border-gray-600/50" />
            <span className="flex items-center gap-2 absolute bg-white rounded py-1 px-2 text-gray-600 font-semibold">
              <MdOutlineVideoLibrary /> Vídeos
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-10">
            <Card
              srcTitle="Assistir"
              onClick={() => setWelcomeVideoOpen(true)}
              title="Apresentação do Clube de Café da Manhã Econômico"
              icon={<FaArrowRightFromBracket />}
            />
            <Card
              srcTitle="Galeria"
              src="https://www.youtube.com/playlist?list=PLSksKII1HhP4yNgQBOkKS1Bv_5TXgjSY7"
              title="Treinamentos Disponíveis Online"
              icon={<FaArrowRightFromBracket />}
            />
          </div>
          <div className="relative flex justify-center items-center my-4">
            <div className="h-[1px] w-full border-t border-dashed border-gray-600/50" />
            <span className="flex items-center gap-2 absolute bg-white rounded py-1 px-2 text-gray-600 font-semibold">
              <FiDownload /> Downloads
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-10">
            <Card
              srcTitle="Baixar"
              src="https://aem.herbalifenutrition.com/linkshare.html?sh=c1f9c17e_1cbb_4586_8564_7936ec3fe6b7.Yly1T9MkiqV3dCVFtiaPWuf4WBUtAP69jO7BzHnc67U"
              title="Política de Privacidade e Formulários de Consentimento"
              icon={<FiDownload />}
            />
            <Card
              srcTitle="Baixar"
              src="https://aem.herbalifenutrition.com/linkshare.html?sh=113e95de_b4af_4bb9_ad57_856129c2a0c0.1dTp60OFyADFvlaPvX4cItd0aTPn7F0K3nm7a8dkfuM"
              title="Estrutura de Caminho e Treinamento"
              icon={<FiDownload />}
            />
            <Card
              srcTitle="Baixar"
              src="https://aem.herbalifenutrition.com/linkshare.html?sh=659416f5_ec5e_4e7d_80f2_5ecc4db723d6.sEKkedkDvO2gr-mVFD2n_3geIM5P_P3xIKk19YxGjds"
              title="Pré-Lançamento de 6 Semanas"
              icon={<FiDownload />}
            />
            <Card
              srcTitle="Baixar"
              src="https://aem.herbalifenutrition.com/linkshare.html?sh=eced9092_5281_4cea_b525_cfa1d32a1a5b.44iFBbPdTLOKHEtP8UGO65jWquhmDcbx4ULShXwLos8"
              title="Avaliação de Bem-Estar Presencial no Clube"
              icon={<FiDownload />}
            />
            <Card
              srcTitle="Baixar"
              src="https://aem.herbalifenutrition.com/linkshare.html?sh=8a63a964_f1d1_468b_b7c1_6bb66fe6c127.lcnKBJzxqqQaDo_cwqfQ2-bPkLhJm_hIt1eNCCdm7Qg"
              title="Documentos da Revisão de Duas Semanas"
              icon={<FiDownload />}
            />
            <Card
              srcTitle="Baixar"
              src="https://aem.herbalifenutrition.com/linkshare.html?sh=3bc718b6_3668_4d07_9029_22a4377985c3.zYNs351igKGF4218zI4sUPi3hl5h_YnOKauV81lYJOk"
              title="Checklists do Clube de Café da Manhã Econômico"
              icon={<FiDownload />}
            />
            <Card
              srcTitle="Baixar"
              src="https://aem.herbalifenutrition.com/linkshare.html?sh=6c813ce6_fa5d_4069_95e0_15e5b9f1b36f.H6UWbsI2wbkvQhbP57heNuGgJu646h1cErvan6oFgcI"
              title="Documentos para Operar um Clube de Nutrição"
              icon={<FiDownload />}
            />
            <Card
              srcTitle="Baixar"
              src="https://aem.herbalifenutrition.com/linkshare.html?sh=3bc718b6_3668_4d07_9029_22a4377985c3.zYNs351igKGF4218zI4sUPi3hl5h_YnOKauV81lYJOk"
              title="Clube de Café da Manhã Econômico Online"
              icon={<FiDownload />}
            />
            <Card
              srcTitle="Baixar"
              src="https://aem.herbalifenutrition.com/linkshare.html?sh=a46ad3ea_692d_48de_ad13_d34ad16a9594.EqPcv_o14S2np3Fa3CTeGEICyVfXBtBak1TEeGXxbyQ"
              title="Documentos para Treinamento de Coach"
              icon={<FiDownload />}
            />
            <Card
              srcTitle="Baixar"
              src="https://aem.herbalifenutrition.com/linkshare.html?sh=31cf0ea1_e366_4ff4_997d_c2a602651b1f.WwRKpAHulg_sPPRR_VKwHWb5BbPiGMF2-EZr71CseSA"
              title="Documentos para Parceiro Junior"
              icon={<FiDownload />}
            />
          </div>
          <div className="relative flex justify-center items-center my-4">
            <div className="h-[1px] w-full border-t border-dashed border-gray-600/50" />
            <span className="flex items-center gap-2 absolute bg-white rounded py-1 px-2 text-gray-600 font-semibold">
              <FaArrowRightFromBracket /> Links
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-10">
            <Card
              srcTitle="Acessar"
              src="https://pt.research.net/r/cadastrofacilevs"
              title="Registre seu Clube aqui"
              icon={<FaArrowRightFromBracket />}
            />
          </div>
        </div>
      </section>
      <Modal
        isOpen={welcomeVideoOpen}
        onClose={() => setWelcomeVideoOpen(false)}
      >
        <div className="relative w-full max-w-[600px] aspect-video my-6 shadow-card rounded-sm overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/_khxh51-ZPU?si=_ay956ZPcLXN7Sjn&autoplay=1&mute=1&rel=0&modestbranding=1&controls=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-sm"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </Modal>
    </div>
  );
}
