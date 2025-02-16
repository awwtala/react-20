export default function About() {
  return (
    <div class="py-16 bg-white">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:5/12 lg:w-5/12">
            <img
              src="./avator.JPG"
              alt="image"
              loading="lazy"
              width="300px"
              height="200px"
            />
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-3xl text-gray-900 font-bold md:text-4xl">
              About Me
            </h2>
            <p class="mt-6 text-gray-600">
              My name is Tala and I am a certified full-stack web developer from
              University of California, Berkeley. I have also earned my
              bachelor's in Psychology from Cal State Unvierity, Fullerton. I
              love to learn and to continue learning.
            </p>
            <p class="mt-4 text-gray-600"> </p>
          </div>
        </div>
      </div>
    </div>
  );
}
