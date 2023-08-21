import React, { useState } from 'react';

const About = () => {        
    return (
          <section className="-mt-32 bg-gray-50 rounded-lg py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">        

          <h1 className="mt-6 text-4xl font-bold text-gray-700 opacity-95 sm:text-5xl">
          <span>matr</span>Yoshka
          </h1>

          <div className="flex items-center justify-center mt-8 space-x-2">
            <p className="text-base font-medium text-gray-900">
              <a href="#" title="" className="">
                Subtitle
              </a>
            </p>
            <span className="text-base font-medium text-gray-500">
              •
            </span>
            <p className="text-base font-medium text-gray-500">
              November 22, 2021
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
          <img className="object-cover w-full h-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-content/1/cover.png" alt="" />
        </div>

        <div className="grid grid-cols-1 mt-8 sm:mt-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-12 gap-y-8">
          <div className="lg:col-span-2 lg:self-start lg:sticky lg:top-6 lg:order-last">
            <ul className="flex space-x-3 lg:space-x-0 lg:space-y-4 lg:flex-col lg:items-center">
              <li>
                <a href="#" title=""
                  className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 border border-gray-200 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  <span className="sr-only">
                    Discord
                  </span>
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z">
                    </path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" title=""
                  className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 border border-gray-200 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  <span className="sr-only">
                    Twitter
                  </span>
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z">
                    </path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" title=""
                  className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 border border-gray-200 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  <span className="sr-only">
                    Telegram
                  </span>
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z">
                    </path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#" title=""
                  className="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 border border-gray-200 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  <span className="sr-only">
                    LinkedIn
                  </span>
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block lg:col-span-2"></div>

          <article
            className="prose lg:col-span-8 max-w-none prose-gray prose-blockquote:px-8 prose-blockquote:py-3 prose-blockquote:lg:text-xl prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:border-gray-900 prose-blockquote:border-l-2 prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:bg-gray-100 prose-blockquote:text-lg prose-blockquote:leading-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque ut pellentesque varius amet
              mauris.
              Tempor,
              risus, congue gravida nulla tincidunt nec diam. Tincidunt magnis eu, vitae dictumst commodo dolor in.
              Aenean
              dictumst
              risus posuere a at id fermentum nibh. Luctus nunc bibendum duis egestas scelerisque.
            </p>
            <p>
              Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus, vel blandit adipiscing a sed cursus. Augue
              vestibulum
              tempus lectus gravida condimentum mauris iaculis. Sodales imperdiet id maecenas molestie id.
            </p>

            <blockquote>
              <p>
                Tincidunt magnis eu, vitae dictumst commodo dolor in. Aen ean dictumst risus posuere a at id fermentum
                nibh. Luctus
                nunc bibendum duis egestas scelerisque.
              </p>
            </blockquote>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque ut pellentesque varius amet
              mauris.
              Tempor,
              risus, congue gravida nulla tincidunt nec diam. Tincidunt magnis eu, vitae dictumst commodo dolor in.
              Aenean
              dictumst
              risus posuere a at id fermentum nibh. Luctus nunc bibendum duis egestas scelerisque.
            </p>

            <p>
              Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus, vel blandit adipiscing a sed cursus. Augue
              vestibulum
              tempus lectus gravida condimentum mauris iaculis. Sodales imperdiet id maecenas molestie id.
            </p>

            <ul className="marker:text-gray-900">
              <li>
                Id pellentesque ut pellentesque varius amet mauris.
              </li>

              <li>
                Tempor, risus, congue gravida nulla tincidunt.
              </li>

              <li>
                Tincidunt magnis eu, vitae dictumst.
              </li>

              <li>
                Aenean dictumst risus posuere a at id fermentum nibh.
              </li>
            </ul>

            <img className="object-cover w-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-content/1/image.png" alt="" />

            <h2>
              How to start the process?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque ut pellentesque varius amet
              mauris.
              Tempor,
              risus, congue gravida nulla tincidunt nec diam. Tincidunt magnis eu, vitae dictumst commodo dolor in.
              Aenean
              dictumst
              risus posuere a at id fermentum nibh. Luctus nunc bibendum duis egestas scelerisque.
            </p>
            <p>
              Maecenas in pharetra hendrerit neque, tellus eu. Arcu tempus, vel blandit adipiscing a sed cursus. Augue
              vestibulum
              tempus lectus gravida condimentum mauris iaculis. Sodales imperdiet id maecenas molestie id.
            </p>
          </article>
        </div>
      </div>
    </section>
    )
}
export default About;