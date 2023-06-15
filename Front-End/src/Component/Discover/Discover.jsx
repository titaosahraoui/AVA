import React from "react";

const Discover = () => {
  return (
    <div>
      <div className="discover  w-[100%] h-[100%] grid grid-cols-2 gap-5 mt-2">
        <div className="right">
          <div className="w-[100%] h-[100%] relative ">
            <video
              className="w-[100%]"
              autoPlay
              crossOrigin="anonymous"
              loop
              aria-hidden="true"
              tabIndex="-1"
              src="https://house-fastly-signed-eu-west-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/1268729919001/6aa66318-2274-4e78-b7d8-27fb3a06cdd1/db6771b0-18de-40d6-b47a-8621edbcafb7/main.mp4?fastly_token=NjVmNGY5OGFfZjU5MDRlNmNiYWI5Nzk5OTBlMjcyOTY1ZmUxODg5NTY3NTI4ZTBjNTgwYWI4ZTczMGI0MWIzNzEzYWVlNTgzM18vL2hvdXNlLWZhc3RseS1zaWduZWQtZXUtd2VzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMTI2ODcyOTkxOTAwMS82YWE2NjMxOC0yMjc0LTRlNzgtYjdkOC0yN2ZiM2EwNmNkZDEvZGI2NzcxYjAtMThkZS00MGQ2LWI0N2EtODYyMWVkYmNhZmI3L21haW4ubXA0"
            ></video>
            <div className=" absolute top-[70%] left-[10%] text-white text-2xl flex flex-col gap-12 items-start">
              <div>
                <h2 className="font-bold">Keep It Light</h2>
                <h1 className="text-[3rem] font-bold mt-5">Spring Outwear</h1>
              </div>
              <button className="border-2 border-solid border-white px-4">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="left">
          <picture className="relative w-[100%]">
            <source
              type="image/webp"
              media="(max-width: 22.5rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1678986390157&amp;qlt=80&amp;wid=360&amp;hei=348"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1678986390157&amp;qlt=80&amp;wid=360&amp;hei=348"
            />
            <source
              type="image/webp"
              media="(max-width: 26rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010656&amp;qlt=80&amp;wid=414&amp;hei=400"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010656&amp;qlt=80&amp;wid=414&amp;hei=400"
            />
            <source
              type="image/webp"
              media="(max-width: 46.99rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010657&amp;qlt=80&amp;wid=720&amp;hei=696"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010657&amp;qlt=80&amp;wid=720&amp;hei=696"
            />
            <source
              type="image/webp"
              media="(max-width: 46.99rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010657&amp;qlt=80&amp;wid=720&amp;hei=696"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010657&amp;qlt=80&amp;wid=720&amp;hei=696"
            />
            <source
              type="image/webp"
              media="(max-width: 80rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010659&amp;qlt=80&amp;wid=720&amp;hei=696"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010659&amp;qlt=80&amp;wid=720&amp;hei=696"
            />
            <source
              type="image/webp"
              media="(max-width: 80rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010659&amp;qlt=80&amp;wid=720&amp;hei=696"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010659&amp;qlt=80&amp;wid=720&amp;hei=696"
            />
            <source
              type="image/webp"
              media="(min-width: 90rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010661&amp;qlt=80&amp;wid=720&amp;hei=696"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=webp-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010661&amp;qlt=80&amp;wid=720&amp;hei=696"
            />
            <source
              media="(max-width: 22.5rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010662&amp;qlt=80&amp;wid=360&amp;hei=348"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010662&amp;qlt=80&amp;wid=360&amp;hei=348"
            />
            <source
              media="(max-width: 26rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010663&amp;qlt=80&amp;wid=414&amp;hei=400"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010663&amp;qlt=80&amp;wid=414&amp;hei=400"
            />
            <source
              media="(max-width: 46.99rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010664&amp;qlt=80&amp;wid=720&amp;hei=696"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010664&amp;qlt=80&amp;wid=720&amp;hei=696"
            />
            <source
              media="(max-width: 63.99rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010665&amp;qlt=80&amp;wid=720&amp;hei=696"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010665&amp;qlt=80&amp;wid=720&amp;hei=696"
            />
            <source
              media="(max-width: 80rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010665&amp;qlt=80&amp;wid=720&amp;hei=696"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010665&amp;qlt=80&amp;wid=720&amp;hei=696"
            />
            <source
              media="(max-width: 90rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010666&amp;qlt=80&amp;wid=720&amp;hei=696"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010666&amp;qlt=80&amp;wid=720&amp;hei=696"
            />
            <source
              media="(min-width: 90rem)"
              data-srcset="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010667&amp;qlt=80&amp;wid=720&amp;hei=696"
              srcSet="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010667&amp;qlt=80&amp;wid=720&amp;hei=696"
            />
            <img
              src="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010668&amp;qlt=80&amp;wid=720&amp;hei=696"
              data-src="https://images.hugoboss.com/is/image/hugobossdm/230307_B_MW_Denim_1200x1160?%24large%24&amp;fmt=png-alpha&amp;align=0,-1&amp;fit=crop,1&amp;ts=1679051010668&amp;qlt=80&amp;wid=720&amp;hei=696"
              alt="Denim for Men by BOSS"
            />
            <div className=" absolute top-[70%] left-[10%] text-white text-2xl flex flex-col gap-12 items-start">
              <div>
                <h2 className="font-bold">Timless Style</h2>
                <h1 className="text-[3rem] font-bold mt-5">Modern Denim</h1>
              </div>
              <button className="border-2 border-solid border-white px-4">
                Shop Now
              </button>
            </div>
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Discover;
