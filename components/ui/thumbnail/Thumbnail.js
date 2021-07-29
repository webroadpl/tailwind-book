import Card from "../../card/Card";
import EyeIcon from "../../ui/icon/EyeIcon";
import ShareIcon from "../../ui/icon/ShareIcon";

export default function Thumbnail({src='', title=''}) {
    return (
        <Card className="transition group hover:scale-105">
            <div className="mb-5 relative">
                <img
                    src={src}
                    alt={title}
                    className="opacity-75 rounded-lg filter grayscale group-hover:grayscale-0 group-hover:opacity-100"
                />

                <div className="grid drop-shadow-xl grid-cols-2 gap-4 w-full rounded text-white text-shadow-lg absolute bottom-[10px]">
                    <div className="flex justify-end" title="Wyświetlenia">
                        <EyeIcon/>
                        <strong>
                            {Math.floor(Math.random() * 15)}
                        </strong>
                    </div>

                    <div className="flex justify-start" title="Pobrania">
                        <ShareIcon/>
                        <strong>
                            {Math.floor(Math.random() * 15)}
                        </strong>
                    </div>
                </div>
            </div>

            <p className="text-gray-400 text-sm text-center truncate mt-5">
                {title}
            </p>
        </Card>
    );
}
