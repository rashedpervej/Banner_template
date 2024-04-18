"use client";
import Image from "next/image";
import { useState } from "react";
import html2canvas from "html2canvas";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const [nameAndTitle, setNameAndTitle] = useState({ name: "", title: "" });
  const [picturesData, setPicturesData] = useState("");
  const onBase64Encripted = async (e: any) => {
    try {
      const reader: any = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setPicturesData(reader.result);
      };
    } catch (error: any) {
      console.log("file not found");
    }
  };
  const onDownLoad = () => {
    const DivEle: any = document.querySelector("#image_1_div") as HTMLElement;
    const banerImage = document.querySelector("#bannerImage") as HTMLElement;
    const titleAndText = document.querySelector(
      "#NameOrTitleTextDiv"
    ) as HTMLElement;
    DivEle.setAttribute("id", "divele");
    banerImage.setAttribute("id", "BanerImage");
    titleAndText.setAttribute("id", "flag");
    html2canvas(DivEle).then(function (canvas) {
      const base64Image = canvas.toDataURL("**/png");
      const anchor = document.createElement("a");
      anchor.setAttribute("href", base64Image);
      console.log(anchor);
      anchor.setAttribute("download", "my_image.png");
      anchor.click();
      anchor.remove();
      DivEle.removeAttribute("id");
      banerImage.removeAttribute("id");
      titleAndText.removeAttribute("id");
      setPicturesData("");
      setNameAndTitle({ ...nameAndTitle, name: "", title: "" });
      router.refresh();
    });
  };
  const onYoutube = () => {
    alert("It's created By Hirock.....youtube link is not available yet");
  };
  return (
    <main className=" pr-10 pl-10 bg-slate-100 h-screen overflow-y-scroll pt-14">
      <div className=" flex items-center justify-center z-50 fixed top-0  right-0 left-0 pl-10 pr-10">
        <div className=" w-full flex items-center">
          <Image
            src={"/images/nagat.png"}
            alt="img"
            width={60}
            height={60}
            className=" absolute ml-5"
          />
          <input type="text" className=" w-full h-10 pl-20 rounded-full " />
        </div>
      </div>
      <div>
        <div className=" border h-20 bg-green-400">Animated image</div>
        <div
          id="text_section"
          className=" mt-4 flex flex-col items-center text-xs gap-2"
        >
          <h1>শুভ নবর্বষ ১৪৩১</h1>
          <p>
            নতুন বছরে নতুন স্বপ্নে
            <br />
            এগিয়ে যাই নতুন সহিসে
          </p>
          <p className=" text-center ">
            নতুন বছরে আমাদের স্বপ্নগুলো সাহসের স্পর্শে পূর্ণতা পাক, নতুন বাংলা
            বছরে সবার জন্য এই শুভকামনা। বাঙালিদের প্রাণের উৎসব বাংলা নববর্ষের
            আনন্দ
            <br />
            প্রতিটি হৃদয়ে পৌঁছে দিতে, আপনাকেও চাই আমাদের পাশে।
          </p>
          <p>
            আপনার ছবি এবং নাম দিয়ে আপনিও অংশগ্রহণ করতে পারেন বাঙালির এই প্রাণের
            উৎসবে।
          </p>
          <p>উৎসব হোক সবার, সবাইকে শুভ নববর্ষ।</p>
          <p>
            খুব সহজেই আপনার ছবিটি তৈরি করে ডাউনলোড করে নিন, এবং শেয়ার করুন আপনার
            সোশ্যাল মিডিয়ার পাতায়।
          </p>
          <p className=" text-orange-700">
            ডাউনলোড করার আগে আপনার পছন্দমতো একটি ছবি সিলেক্ট করে নিন।
          </p>
        </div>

        <div className=" mt-5 flex justify-center gap-2 items-center max-sm:flex-col max-sm:gap-2 ">
          <div
            id="image_1_div"
            className="cursor-pointer relative p-5 max-sm:p-2 rounded-md  sm:h-52 md:h-72 lg:h-96 max-sm:h-52 max-sm:w-52 sm:w-52 md:w-72 lg:w-96 "
          >
            {!picturesData ? null : (
              <img
                id="imgb"
                src={picturesData}
                alt="img"
                width={50}
                height={50}
                className=" "
              />
            )}
            <div id="NameOrTitleTextDiv" className="">
              <h1 id="" className=" text-center ">
                {nameAndTitle.name}
              </h1>
              <h1 id="" className=" text-center ">
                {nameAndTitle.title}
              </h1>
            </div>
            <Image
              id="bannerImage"
              src={"/images/frame.png"}
              alt="pic"
              height={500}
              width={500}
              className=" absolute left-0 right-0 top-0 bottom-0"
            />
          </div>

          <div
            id="image_1_div"
            className="cursor-pointer relative p-5 max-sm:p-2 rounded-md  sm:h-52 md:h-72 lg:h-96 max-sm:h-52 max-sm:w-52 sm:w-52 md:w-72 lg:w-96 "
          >
            {!picturesData ? null : (
              <img
                id="imgb"
                src={picturesData}
                alt="img"
                width={50}
                height={50}
                className=" "
              />
            )}
            <div id="NameOrTitleTextDiv" className="">
              <h1 id="" className=" text-center ">
                {nameAndTitle.name}
              </h1>
              <h1 id="" className=" text-center ">
                {nameAndTitle.title}
              </h1>
            </div>
            <Image
              id="bannerImage"
              src={"/images/frame.png"}
              alt="pic"
              height={500}
              width={500}
              className=" absolute left-0 right-0 top-0 bottom-0"
            />
          </div>
        </div>

        <div className=" p-5 bg-white h-48 max-sm:h-72 rounded-md border-t-4 border-red-500 mt-5 mb-20">
          <h1 className=" text-center">
            ডিজিটাল ব্যানারের জন্য আপনার তথ্য দিন:
          </h1>
          <div className=" flex gap-3 flex-col">
            <div className=" flex max-sm:flex-col max-sm:gap-2 sm:gap-3 mt-4 sm:justify-center">
              <div className="flex items-center">
                <input
                  placeholder="sd"
                  type="file"
                  className=" "
                  onChange={onBase64Encripted}
                  id="uploadImage"
                />
                <label
                  htmlFor="uploadImage"
                  className=" bg-red-50 h-9 sm:w-40 max-sm:w-96 rounded-md border-red-600 border text-center text-xs flex items-center justify-center"
                >
                  <h1 className=" text-slate-400">আপনার ছবি সংযুক্ত করুন</h1>
                </label>
              </div>
              <input
                placeholder="আপনার নাম"
                type="text"
                className=" bg-red-50 h-9 rounded-md border-red-600 border text-xs pl-2"
                name="name"
                value={nameAndTitle.name}
                onChange={(e) =>
                  setNameAndTitle({ ...nameAndTitle, name: e.target.value })
                }
              />
              <input
                placeholder="আপনার পদবি এবং স্থান"
                type="text"
                className=" bg-red-50 h-9 rounded-md border-red-600 border text-xs pl-2"
                name="name"
                value={nameAndTitle.title}
                onChange={(e) =>
                  setNameAndTitle({ ...nameAndTitle, title: e.target.value })
                }
              />
            </div>
            <div className=" flex items-center justify-center">
              {!picturesData ? (
                <button className=" text-white border bg-red-600 w-40 h-10 rounded-full hover:bg-red-800 active:bg-red-900 ">
                  download
                </button>
              ) : (
                <button
                  onClick={onDownLoad}
                  className=" text-white border bg-red-600 w-40 h-10 rounded-full hover:bg-red-800 active:bg-red-900 "
                >
                  download
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
