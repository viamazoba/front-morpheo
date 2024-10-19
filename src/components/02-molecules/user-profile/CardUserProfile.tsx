import Link from "next/link"
import Image from "next/image"
import { CameraIcon } from "@heroicons/react/24/outline"

export const CardUserProfile = () => {

    return (
        <div className="bg-principal-150 rounded-8 shadow-xl px-4 py-3 max-w-73 max-h-fit">
            <div className="flex justify-center p-3">
                <Image
                    src={"https://picsum.photos/id/200/200/200"}
                    alt={"User avatar"}
                    width={200}
                    height={200}
                    className=" rounded-full w-full h-full"
                />
            </div>
            <div className="relative">
                <CameraIcon
                    className="absolute right-0 bottom-0 cursor-pointer w-7 h-auto"
                />
                <hr className="border-principal-800 mt-1 mb-3" />
            </div>
            <div className="flex flex-col gap-2 mt-2 pb-2">
                <div>
                    <p className="font-semibold text-principal-150 bg-principal-180 rounded-2 px-1.5 py-0.5 mb-0.5">
                        Nombre&nbsp;
                    </p>
                    <p className="font-normal text-principal-350">Maria Alejandra Cardona Salamanca</p>
                </div>
                <div className="grid grid-cols-2 mt-2">
                    <div>
                        <p className="font-semibold text-principal-150 bg-principal-180 rounded-l-2 px-1.5 py-0.5  mb-0.5">
                            Grado&nbsp;
                        </p>
                        <p className="font-normal text-principal-350">11-2</p>
                    </div>
                    <div>
                        <p className="font-semibold text-principal-150 bg-principal-180 rounded-r-2 px-1.5 py-0.5  mb-0.5">
                            Año&nbsp;
                        </p>
                        <p className="font-normal text-principal-350">2024</p>
                    </div>
                </div>
                <div className="">
                    <p className="font-semibold text-principal-150 bg-principal-180 rounded-2 px-1.5 py-0.5 mb-0.5">
                        Correo&nbsp;
                    </p>
                    <p className="font-normal text-principal-350">
                        macardonas@gmail.com
                    </p>
                </div>
                {/* <div className="mb-2">
                    <p className="font-semibold text-principal-180">
                        Resultado:&nbsp;
                        <span className="font-normal text-principal-350">70.2%</span>
                    </p>
                </div>
                <Link
                    href={"/"}
                    className="font-semibold text-principal-500 text-opacity-80 border-b-[1px] py-0.5 hover:text-principal-500"
                >
                    Ver Más
                </Link> */}
                <hr className="border-principal-800 mt-3" />
                <div className="bg-principal-800 h-1" />
            </div>
        </div>
    )
}