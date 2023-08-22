import React, { useState } from 'react';

const About = () => {        
    return (
          <section className="-mt-32 bg-gray-50 rounded-lg py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">        

          <h1 className="mt-6 text-4xl font-bold text-gray-700 opacity-95 sm:text-5xl">
              <span>About🪆</span> Yoshka 
          </h1>

          <div className="flex items-center justify-center mt-8 space-x-2">
            <p className="text-base font-medium text-gray-900">
              <a href="#" title="" className="">
                Harmonizing Music, Empowering Artists: Unleash the Magic of Yoshka NFT Melodies
              </a>
            </p>
          </div>
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
              Welcome to Yoshka, a groundbreaking hackathon project that aims to revolutionize the way songs are structured, valued, and owned. We have leveraged the power of the Celo blockchain and harnessed Bunzz for DApp deployment to create a platform that introduces an entirely new paradigm for the music industry.
            </p>

              {/* <img className="object-cover w-full" src="https://www.pexels.com/@gabby-k/" alt="" /> */}

            <h1 className="mt-6 text-4xl font-bold text-center text-gray-700 opacity-95 sm:text-5xl">
              Our Vision
            </h1>

            <blockquote>
              <p>
                At Yoshka, we envision a future where music transcends traditional boundaries and becomes an interconnected network of creativity, collaboration, and ownership. Inspired by the concept of Matryoshka dolls, our platform transforms songs into a tapestry of individual elements, allowing for layered ownership, value attribution, and seamless royalty management.
              </p>
            </blockquote>

            <h1 className="mt-6 text-4xl font-bold text-center text-gray-700 opacity-95 sm:text-5xl">
              The Problems We Solve
            </h1>

            <h4 className="mt-6 font-bold text-center text-gray-700">
            Fragmented Song Ownership and Royalties Management
            </h4>

            <blockquote>
              <p>
              Traditional music distribution and ownership structures often result in fragmented ownership of songs and difficulties in managing royalties. Yoshka addresses this problem by introducing NFTs to tokenize individual song stems and complete compositions. This enables seamless royalty management and automated recognition of contributors, ensuring that artists are accurately compensated for their creative contributions. 
              </p>
            </blockquote>
            <h4 className="mt-6 font-bold text-center text-gray-700">
            Limited Creative Control for Artists 
            </h4>

            <blockquote>
              <p>
              In conventional music production, artists might lack control over their creations once they&apos;re released. Yoshka empowers artists with greater creative control by enabling them to tokenize and manage their music&apos;s individual components through NFTs. This way, artists can assert ownership and control over their work, even after it&apos;s shared with the world.  
              </p>
            </blockquote>
            <h4 className="mt-6 font-bold text-center text-gray-700">
            Lack of Direct Recognition and Fair Compensation 
            </h4>

            <blockquote>
              <p>
              Collaborators and contributors to a song often struggle to receive fair recognition and compensation for their contributions. Yoshka&apos;s NFT-based approach ensures that contributors are automatically recognized and rewarded whenever their work is used or shared. This solves the problem of fair compensation for various contributors, including musicians, producers, and songwriters.
              </p>
            </blockquote>

            <h1 className="mt-6 text-4xl font-bold text-center text-gray-700 opacity-95 sm:text-5xl">
              Key Innovations
            </h1>

            <h4 className="mt-6 font-bold text-center text-gray-700">
              Stem Uploads: Redefining Song Creation
            </h4>

            <p>
              In the absence of a full-fledged Digital Audio Workstation (DAW), Yoshka enables users to upload song stems. These stems are the fundamental building blocks of music, representing individual components that collectively form a harmonious whole.
            </p>

            {/* <img className="object-cover w-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-content/1/image.png" alt="" /> */}

            <h4 className="mt-6 font-bold text-center text-gray-700">
              Tokenization: Empowering Artists with NFTs
            </h4>
            <p>
              With Yoshka, each stem and the assembled song itself is transformed into a unique NFT (Non-Fungible Token). This ingenious approach embeds ownership and value directly within the digital creation, empowering artists with a new level of recognition and creative control.
            </p>

            {/* <img className="object-cover w-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-content/1/image.png" alt="" /> */}

            <h4 className="mt-6 font-bold text-center text-gray-700">
              Automated Royalty Management
            </h4>

            <p>
              Our platform revolutionizes the way royalties are distributed. Through the power of NFTs, contributors are automatically recognized and compensated for their creative contributions. This ensures that every artist receives their due recognition and financial rewards.
            </p>

            {/* <img className="object-cover w-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-content/1/image.png" alt="" /> */}

            <h1 className="mt-6 text-4xl font-bold text-center text-gray-700 opacity-95 sm:text-5xl">
              Journey of Creation
            </h1>

            <h4 className="mt-6 font-bold text-center text-gray-700">
              User Interaction
            </h4>

            <p className="text-center">
              Begin your journey by uploading stems via our intuitive web platform.
            </p>

            <h4 className="mt-6 font-bold text-center text-gray-700">
              Audio Assembly
            </h4>

            <p className="text-center">
              Our platform compiles these stems to craft a symphony, appending the necessary metadata.
            </p>

            <h4 className="mt-6 font-bold text-center text-gray-700">
              Tokenization
            </h4>

            <p className="text-center">
              Witness the magic as both the song and its stems transform into distinct NFTs on the Celo blockchain.
            </p>

            <h1 className="mt-6 text-4xl font-bold text-center text-gray-700 opacity-95 sm:text-5xl">
              Join Us on This Magical Journey
            </h1>

            <p className="text-center">
              Yoshka is a testament to innovation, creativity, and community collaboration. As we continue to push the boundaries of the music industry, we invite you to join us on this magical journey. Lets redefine music, one NFT at a time.
            </p>

            <p className="text-center">
              Visit us at yoshka-music.com to explore the future of music creation and ownership.
            </p>
          </article>
        </div>
      </div>
    </section>
    )
}
export default About;