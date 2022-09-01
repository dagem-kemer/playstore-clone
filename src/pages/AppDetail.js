import StarIcon from "../components/icons/StarIcon";
import AddWhishlistIcon from "../components/icons/AddWhishlist";
import AppBar from "../components/Detail/AppBar";
import Rating from "../components/review/Rating";
import Review from "../components/review/Review";
import ListItem from "../components/List/ListItem";
import ListWrapper from "../components/List/ListWrapper";

const AppDetail = () => {
  return (
    <>
      <AppBar />
      <main className="mt-[64px] lg:mx-[72px] mb-12">
        <div className="relative text-darkGrey">
          {/* app detail */}
          <div className="pt-[48px]">
            {/* app title */}
            <h1 className="text-black text-6xl font-bold">Stumble Guys</h1>
            <div className="mt-4">
              {/* producer */}
              <h2 className="text-darkerGreen font-bold">Kitika Games</h2>
              {/* features */}
              <div className="text-sm">
                <span>Contains Ad</span>
                <span className="ml-2">In app purchases</span>
              </div>
            </div>

            {/* app statistics */}
            <div className="flex text-sm mt-4 mb-6 py-3">
              {/* rating */}
              <div className="mr-4">
                <div className="flex justify-center items-center text-lightBlack">
                  <span>4.3</span>
                  <StarIcon />
                </div>
                <div className="text-center text-xs">3.25M reviews</div>
              </div>
              {/* download numbers */}
              <div className="mx-6 flex flex-col items-center">
                <span className="block text-lightBlack">100 M+</span>
                <span className="block text-xs">Downloads</span>
              </div>
              {/* users */}
              <div>
                <div className="flex justify-center h-[20px]">
                  <img
                    src="https://play-lh.googleusercontent.com/IciOnDFecb5Xt50Q2jlcNC0LPI7LEGxNojroo-s3AozcyS-vDCwtq4fn7u3wZmRna8OewG9PBrWC-i7i=w48-h16-rw"
                    srcset="https://play-lh.googleusercontent.com/IciOnDFecb5Xt50Q2jlcNC0LPI7LEGxNojroo-s3AozcyS-vDCwtq4fn7u3wZmRna8OewG9PBrWC-i7i=w96-h32-rw 2x"
                    class="block h-4"
                    alt="Content rating"
                  />
                </div>
                <div className="text-center text-xs">Everyone</div>
              </div>
            </div>

            {/* download and add whishlist */}
            <div className="flex">
              <button className="px-4 py-2.5 min-w-[200px] font-bold bg-secondaryGrey text-lightGrey rounded-md">
                Install
              </button>
              <button className="mr-4 px-4 py-2.5 min-w-[200px] text-lightGrey rounded-md text-sm font-bold">
                <div className="flex items-center">
                  <AddWhishlistIcon />
                  <span className="ml-2">Add to whishlist</span>
                </div>
              </button>
            </div>
          </div>
          {/* app icon */}
          <div className="absolute right-0 top-[48px]">
            <div className="w-[240px] h-[240px] bg-red-500 rounded-[20%] shadow-xl"></div>
          </div>
        </div>

        <div className="flex justify-between mt-6 gap-9">
          <div className="grow">
            <ListWrapper>
              <div className="h-[296px] w-[85%] rounded-xl snap-start bg-red-500 my-2 shadow-md shrink-0 mr-2"></div>
              <div className="h-[296px] w-[85%] rounded-xl snap-start bg-yellow-500 my-2 shadow-md shrink-0 mr-2"></div>
              <div className="h-[296px] w-[85%] rounded-xl snap-start bg-green-500 my-2 shadow-md shrink-0 mr-2"></div>
            </ListWrapper>
            <h1 className="text-2xl font-bold pb-5">Ratings and reviews</h1>
            <Rating />
            {/* users review */}
            <Review
              user={{ name: "Samuel Alemayehu" }}
              date="August 20, 2020"
              reveiwText={
                "Fall Guys clone for mobile. It's just like Fall Guys, but with fewer rounds, less players in each match, and clunky on screen controls. It does what it can, the ads aren't invasive compared to other free games, which is a plus, (probably the only thing pushing it up to a 4/5), and all IAPs are cosmetic. There aren't a lot of variety in maps so far, but it's fun for what it is in small doses."
              }
            />

            <Review
              user={{ name: "Samuel Alemayehu" }}
              date="August 20, 2020"
              reveiwText={
                "Fall Guys clone for mobile. It's just like Fall Guys, but with fewer rounds, less players in each match, and clunky on screen controls. It does what it can, the ads aren't invasive compared to other free games, which is a plus, (probably the only thing pushing it up to a 4/5), and all IAPs are cosmetic. There aren't a lot of variety in maps so far, but it's fun for what it is in small doses."
              }
            />
          </div>
          <div className="basis-[400px] shrink-0">
            <h1 className="text-2xl font-bold pb-5">Similar Apps</h1>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <ListItem
                index={index}
                key={index}
                image="https://yt3.ggpht.com/ytc/AMLnZu-CbOUpKWnChEpvLaIwfJu9PvYGb1RE2h46c-7qng=s900-c-k-c0x00ffffff-no-rj"
                rating="3.9"
                name="Super fun game"
                numbered
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default AppDetail;
