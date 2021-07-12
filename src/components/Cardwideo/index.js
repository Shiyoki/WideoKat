import "./styles.css"

export const Cardwideo=()=>{
    return(
      <>
         <section className="mx-auto my-14">
            <h2 className="font-bold text-white text-3xl text-center p-3">Lorem Ipsum</h2>
            <div className="grid grid-cols-12 gap-20 p-10">
               <div className="group col-span-4 rounded-sm">
                  <h3 className="font-bold text-white text-lg text-center group-hover:text-indigo-300 transition ease-in duration-300">Lorem Ipsum</h3>
                  <p className="font-normal text-white text-md break-all text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget efficitur diam, sed facilisis orci. Aliquam hendrerit purus porttitor erat mollis mollis. Curabitur aliquam diam in enim volutpat mollis. Quisque velit nisl, gravida eu enim sit amet, tempus rhoncus sapien.</p>
               </div>
               <div className="group col-span-4">
                  <h3 className="font-bold text-white text-lg text-center group-hover:text-indigo-300 transition ease-in duration-300">Lorem Ipsum</h3>
                  <p className="font-normal text-white text-md break-all text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget efficitur diam, sed facilisis orci. Aliquam hendrerit purus porttitor erat mollis mollis. Curabitur aliquam diam in enim volutpat mollis. Quisque velit nisl, gravida eu enim sit amet, tempus rhoncus sapien.</p>
               </div>
               <div className="group col-span-4">
                  <h3 className="font-bold text-white text-lg text-center group-hover:text-indigo-300 transition ease-in duration-300">Lorem Ipsum</h3>
                  <p className="font-normal text-white text-md break-all text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget efficitur diam, sed facilisis orci. Aliquam hendrerit purus porttitor erat mollis mollis. Curabitur aliquam diam in enim volutpat mollis. Quisque velit nisl, gravida eu enim sit amet, tempus rhoncus sapien.</p>
               </div>
            </div>
         </section>

         <section className="px-3 mb-14 grid grid-cols-12 gap-3">
            <div className="col-span-6">
               <div className="border-purple-400 border bg-gradient-to-tr from-purple-900 to-purple-700 flex rounded-sm">
                  <div className="rounded-sm flex-shrink-0">
                     <img className="object-cover w-60" src="https://img.discogs.com/YjiUbH-R82KJf5MujAI1VDMS4cg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2179374-1576817857-6649.jpeg.jpg" alt="card-img"></img>
                  </div>
                  <div className="p-6 mx-auto">
                     <h4 className="font-bold text-white text-2xl text-center">Lorem ipsum</h4>
                     <p className="font-normal text-white text-md break-all text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget efficitur diam, sed facilisis orci. Aliquam hendrerit purus porttitor erat mollis mollis. Curabitur aliquam diam in enim volutpat mollis. Quisque velit nisl, gravida eu enim sit amet, tempus rhoncus sapien.</p>
                  </div>
               </div>
            </div>
            <div className="col-span-6">
               <div className="border-purple-400 border bg-gradient-to-tr from-purple-900 to-purple-700 flex rounded-sm">
                  <div className="rounded-sm flex-shrink-0">
                     <img className="object-cover w-60" src="https://insheepsclothinghifi.com/wordpress/wp-content/uploads/2021/01/spacy_front.jpg" alt="card-img"></img>
                  </div>
                  <div className="p-6 mx-auto">
                     <h4 className="font-bold text-white text-2xl text-center">Lorem ipsum</h4>
                     <p className="font-normal text-white text-md break-all text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget efficitur diam, sed facilisis orci. Aliquam hendrerit purus porttitor erat mollis mollis. Curabitur aliquam diam in enim volutpat mollis. Quisque velit nisl, gravida eu enim sit amet, tempus rhoncus sapien.</p>
                  </div>
               </div>
            </div>
         </section>
      </>  
  );
}