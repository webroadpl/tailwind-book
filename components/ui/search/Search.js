import Input from '../../form/Input'

export default function Search() 
{
    return (
        <div>
            <Input 
                type="search" 
                className="py-1 px-3 border-b w-full"
                placeholder="Wpisz coś, aby wyszukać..."
            />
        </div>
    );
};
