import DefaultLayout from "../../components/layouts/defaultLayout/DefaultLayout";
import Article from "../../components/ui/article/Article";

export default function Regulation() {
    return (
        <DefaultLayout title="Regulamin usługi">
            <div className="grid grid-cols-1 xl:grid-cols-2">
                <Article
                    title="Regulamin naszej usługi"
                    author="Michał Kortas"
                    date="2022-05-21"
                >
                    <p className="article-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nibh purus. Phasellus gravida, metus sit amet gravida molestie, nunc augue maximus magna, at vestibulum dolor augue vitae dolor. Suspendisse aliquet, nisi eget molestie tincidunt, enim ipsum scelerisque sem, et consectetur lectus nisi eget diam. Donec venenatis turpis eros, vel consequat odio commodo at. Etiam viverra mi ex, vel elementum lorem finibus id. Fusce ullamcorper tincidunt dolor eu lobortis. Suspendisse ut aliquet tortor. Phasellus rhoncus est sit amet elit aliquam ullamcorper. Morbi non ex bibendum, luctus ipsum iaculis, vulputate erat. Proin sodales pharetra nulla, non euismod nisi tincidunt et. Nunc non mauris pellentesque justo lobortis placerat non quis enim. Maecenas erat neque, faucibus rutrum justo in, gravida fringilla orci. Cras nec gravida nibh, semper congue metus. Nam commodo, libero eu consectetur sollicitudin, turpis mauris venenatis eros, eget placerat velit ex vel urna. Ut in suscipit ex. Sed ultricies nulla vel nisl luctus eleifend.
                    </p>

                    <p className="article-p">
                        Sed tincidunt pulvinar sapien at pellentesque. Praesent congue eros eu pharetra semper. Maecenas eu augue augue. Vestibulum volutpat sem dictum leo facilisis bibendum. Duis placerat massa odio, ut scelerisque sapien blandit id. Quisque commodo condimentum orci ac cursus. Cras ultricies aliquam mollis. Nullam eget sem eget odio ornare mollis. Vivamus eu quam mattis urna dignissim dapibus. In vel ante dapibus, condimentum elit eget, vulputate nibh. Aliquam erat volutpat. Cras placerat fermentum risus in pretium. Ut ut bibendum odio. Phasellus pulvinar nisi varius arcu fermentum, ac pretium sem tincidunt.
                    </p>

                    <p className="article-p">
                        Donec ullamcorper massa est, gravida congue ante imperdiet et. Cras dui orci, vehicula sed egestas eleifend, luctus vel eros. Fusce laoreet efficitur nunc, sit amet sodales sem aliquam eu. Mauris laoreet varius interdum. Nam eu euismod dui. Nunc et mollis dui. Morbi accumsan mi nec diam condimentum mollis. Aliquam porttitor porta ex non pellentesque. Maecenas in efficitur urna. Nullam eget vehicula turpis. Fusce tristique tincidunt leo, a porttitor diam pulvinar at. Nulla ac mauris aliquet, elementum enim et, semper lacus.
                    </p>
                </Article>
            </div>
        </DefaultLayout>
    )
}
