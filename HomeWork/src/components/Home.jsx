import React from "react";


const Home = () => {
  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/ef0c/80bd/20fef7237080dbe4814be55ffa3ffc9a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdD5hnthRGlxNRyZ0dOoySaSqMmdhGiQkW2l4Gvuikta8-IhJMyxEh9WGZ92~Sn8U65OcRurxXtck-v2PgjE0rQYLN60YNegXlrBGDhK1xPhT7zo0mZ03VuFgbmV95YMVK6pDzNKwKjtdf9BR9WPHzIG2m549Sh4DexH0vUXB6OIRBpO6xM5CJP5Rr~4ushG7sLMNH1vx~lMysVTvgwt3rLV~pmSddsa~Szj37jJ~3Tl0kkV1jJCysmDPYnGoFX~yMPHd4TgUE9MUFHLbYxis9cpuiX-2WyiXQ2abFs0WCR~Koib7ykBqDY4E33w8K-DhCVQMsjHZP3YaBLzHYUNYQ__";

  const imageContent = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/94d8/2bb2/7822ace31f33d94ee74d8731303878e0?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ncv8JOQmHvsLMWPs1x58HQbsdrJPwKk0aUiYgUcMrCtDcyHQjAO3mZ-WaNlifdFCaErtAo2Cug~9SfWdnfP0KaPIDn9vFnZ63sr-jKf4x2vycGR1izIWhthTQQ~4Bjfv86vBo2oDRIpep4Zvq0eQvqLxjzljNZFagMH-Thvhr0tShydVgeZmRAhZRxhT8UTX6YDKrlfo8M26kdMiPZ8Bwc1Cc3X~DfTY3AWWP2Va209tOXN4R7i3CYu4rN25wbDLiFdMipzU~hIfK4cNGWv5jq9ABFOAqos-eyCNvaPEyb0UVwFw0x25Ry80nRYl1sB~dqCbM6UQc7bjBweXlgXJnw__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7ab3/aea5/2d4373e1b8c47b69e9e07d411b996213?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EnnRlpC3JydRHDMnBrdYwgMl3DYErNGiiszeBfE7lvanaAEpYiTnTZvV2Ubwr96BvHuxmnRfO3cI6oetJjVVk7CceX~fDVjnd1L0hxISGRC1KRyplHii0cdekJZm4zL5cs5uZg6deF2neIwAJO3ErY31MMOvKA66uUMqd4DvmZf3fVcZy1Q~DiWBG9Ww8PxFpHJcIaSRjSxIhAmYjCQp3XdYCEi~jbDP1q5gylMJre54UcSq~YnsvTsJcWAmo61gdKkKSIeA0NaZBslj1kilpeP9F5F0eXsSlrm7cz9wauSphj-VckcV4htIZJuFnUnBaff24omvNnR-E8m1SSUkcw__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/114d/b870/7eb0a8cf5f20a7e1b3bfc1c3fd42eedf?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=py8EBRU~tT~z0~sAD3lPBDmyDOwfjgbc1YTOzMYtY-r3YQ6tEKkipcIIWRxK1t71TcfREtkDRxfS-dicjD0ob-srucrhmGHJLWSqbp6BSHJpWxdunBr4p8UXTIHvbH6~um-IH~Z5MaofZXFQk4LjUhwgerqDu1aOfJfnx14ujs25uduesQR7fOQ~KwY7WbFsz55NxaF7t1nKgmPrc4xTai7anXHJWAs-LIxAXioHumaIH-Pk36lkUo8rwMIETc2RfTbV-2uef1StGVsFISVBQPgdEc~nj5A5SII7bfzEyAkaB6Uqh-LnLMO4WL4Sx-ydAH3tVr3x6WuT~6Slz9-MbQ__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/8418/746f/8638bbdcf78e615e7eb0ee0caca7948a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PdBJZQylSABD-f9ABRfOY0XxFLXwNOSgfnaWt3dRWGw2DAuBIWw55LCKeZG7hcSuzfcbHQ~2mFOBVSC40QuM7DJSG5qIBdCr4Vrpvp-ZHtSNFnNcfzSGdsUSFZzR8u8AJkTyUD9WB9wmL797aj2zcl-6D0-0XfC-zBDu0n58BCSJHqIDqB~FGpLVmLigvomP2nb50YUMgsDrt7MfzQwf6aT0PM~i9FFst~MbHfCx~6eaVhnvuvOtPlAv9gPyApL8ODtK67IF53tF5cdmrRTIkkt0jAqj9cmVZ6Y9cO7oX4IJiDW7Gg0HOwE~FmTVpgUzZe4-Zq302ExdDPmlbDBj~g__",
    },
  ];

  return (
    <>
      {/* banner */}
      <div className="relative h-635">
        <img
          src={imageUrl}
          alt="Banner Image"
          className="w-full h-[635px] max-h-635"
        />

        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center drop-shadow-lg">
          <h1 className="text-[48px] font-bold ">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <br />
          <p className="text-[32px] ">
            One-stop Platform community for Agents and Operator in Thailand.
          </p>
        </div>
      </div>

      {/* content */}
      <>
        <div className="flex flex-auto items-center justify-center mt-6">
          <h1 className="text-[#2A4B6A] font-bold text-[48px] mb-3 align-middle ">
            Lorem ipsum
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {imageContent.map((item) => (
            // container content
            <div className="h-[438px] w-[350px]  rounded-xl mb-10 border shadow-lg shadow-gray-600/30 ">
              {/* img content */}
              <img
                key={item.image}
                src={item.image}
                className="w-[350px] h-[272px] overflow-hidden rounded-t-[8px]"
                alt={`Image ${item.image}`}
              />

              {/* content text */}
              <div className="flex-col text-center mt-1 flex  items-center">
                <h1 className="text-[#2A4B6A] font-bold text-[18px]">
                  Lorem ipsum
                </h1>
                <p className="w-[293px] mx-auto">
                  One-stop Platform community for Agents and Operator in
                  Thailand.
                </p>
                <button className="bg-[#2A4B6A] text-white font-medium p-2 px-8 rounded-full mt-3">
                  Buy package
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default Home;
