import Fruits from "./Fruits";
import Licenses from "./Licenseplates";
import Cars from "./Cars";
import Comments from "./Comments";

const App = () => {
  let fruits = ["rasberry", "banana", "kiwi", "pear"];
  let licensePlates = [
    { city: "Skopje", number: "SK-9999-AB" },
    { city: "Tetovo", number: "TE-9999-AB" },
    { city: "Gostivar", number: "GV-9999-AB" },
  ];
  let cars = [
    { brand: "Ford ", model: "Mondeo ", year: 2000, plate: licensePlates[0] },
    { brand: "Ford ", model: "Fiesta ", year: 2010, plate: licensePlates[1] },
    { brand: "Ford ", model: "Focus ", year: 2012, plate: licensePlates[2] },
  ];

  let comments = [
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      postId: 2,
      id: 6,
      name: "et fugit eligendi deleniti quidem qui sint nihil autem",
      email: "Presley.Mueller@myrl.com",
      body:
        "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
    },
    {
      postId: 3,
      id: 11,
      name: "fugit labore quia mollitia quas deserunt nostrum sunt",
      email: "Veronica_Goodwin@timmothy.net",
      body:
        "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea",
    },

    {
      postId: 4,
      id: 16,
      name: "perferendis temporibus delectus optio ea eum ratione dolorum",
      email: "Christine@ayana.info",
      body:
        "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis",
    },
    {
      postId: 5,
      id: 22,
      name: "porro repellendus aut tempore quis hic",
      email: "Khalil@emile.co.uk",
      body:
        "qui ipsa animi nostrum praesentium voluptatibus odit\nqui non impedit cum qui nostrum aliquid fuga explicabo\nvoluptatem fugit earum voluptas exercitationem temporibus dignissimos distinctio\nesse inventore reprehenderit quidem ut incidunt nihil necessitatibus rerum",
    },
    {
      postId: 6,
      id: 26,
      name: "in deleniti sunt provident soluta ratione veniam quam praesentium",
      email: "Russel.Parker@kameron.io",
      body:
        "incidunt sapiente eaque dolor eos\nad est molestias\nquas sit et nihil exercitationem at cumque ullam\nnihil magnam et",
    },
    {
      postId: 7,
      id: 31,
      name: "ex velit ut cum eius odio ad placeat",
      email: "Buford@shaylee.biz",
      body:
        "quia incidunt ut\naliquid est ut rerum deleniti iure est\nipsum quia ea sint et\nvoluptatem quaerat eaque repudiandae eveniet aut",
    },
    {
      postId: 8,
      id: 36,
      name: "sit et quis",
      email: "Raheem_Heaney@gretchen.biz",
      body:
        "aut vero est\ndolor non aut excepturi dignissimos illo nisi aut quas\naut magni quia nostrum provident magnam quas modi maxime\nvoluptatem et molestiae",
    },
    {
      postId: 9,
      id: 42,
      name: "nam qui et",
      email: "Shemar@ewell.name",
      body:
        "aut culpa quaerat veritatis eos debitis\naut repellat eius explicabo et\nofficiis quo sint at magni ratione et iure\nincidunt quo sequi quia dolorum beatae qui",
    },
    {
      postId: 10,
      id: 46,
      name: "dignissimos et deleniti voluptate et quod",
      email: "Jeremy.Harann@waino.me",
      body:
        "exercitationem et id quae cum omnis\nvoluptatibus accusantium et quidem\nut ipsam sint\ndoloremque illo ex atque necessitatibus sed",
    },
  ];
  return (
    <div id="App">
      <Fruits fruits={fruits}></Fruits>
      <Licenses info={licensePlates}></Licenses>
      <Cars deets={cars}></Cars>
      <Comments details={comments}></Comments>
    </div>
  );
};

export default App;
