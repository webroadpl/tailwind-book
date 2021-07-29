export default function Footer({ className }) 
{
    return (
        <footer className="mt-5">
            <small className={`text-sm md:text-xs text-blue-500 ` + className}>
                Tailwind. Praktyczne Projekty <br/>
                © {new Date().getFullYear()}
            </small>
        </footer>
    );
};
