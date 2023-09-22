import React from 'react'
import Navbar from './navbar'
import axios from 'axios'
import {useEffect, useState } from 'react'

function Blog() {
  const [bloc,setBloc]= useState([])
   function BlogData(){
 const url = 'https://dummyjson.com/posts'
    axios.get(url).then((response)=>{
    console.log(response)
    setBloc(response.data.posts)
 })
   }
   useEffect(()=>{
    BlogData()
   },[])
  return (
    < >
    <Navbar/>
    <div className='container-fluid'>
      <div className='blog1'>
       <div className='blogcont'>
       <div className='blogshead text-center'>
        <b>Blog</b>
        <h3 className='my-3'>BLOG SECTION</h3>
         <span className='text-secondary'>August 07 2023</span>
       </div>
       </div>
      </div>
      <div className='container blog2 my-5'>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner caro">
    <div class="carousel-item active caro-flow">
                <div className='row py-3'> 
            <div className='col-lg-6 col-md-6 col-sm-12 cars pt-5'>
              <div>  <strong className='str rounded-pill'><span className='spa mx-1'></span> Blog</strong> 
              <strong className='str rounded-pill'><span className='spa mx-1'></span> Food</strong></div>
              <h1 className='my-2'>Never let your memories be greater than your dream</h1>      
              <p>
              Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this
              </p>
              <span className='text-secondary mx-3'><i className='fas fa-calendar'></i>May 02 2023</span>
              <span className='text-secondary'><i className='fas fa-clock'></i>4 min Read</span>

            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 carimg'>
              <img src="images/blog5.jpg" alt="" />
            </div>
            </div>
    </div>
    <div class="carousel-item caro-flow">
            <div className='row py-3'>
        <div className='col-lg-6 col-md-6 col-sm-12 cars pt-5'>
          <strong className='str rounded-pill'><span className='spa mx-1'></span> Blog</strong> 
          <h1 className='my-2'>Never let your memories be greater than your dream</h1>      
          <p>
          Nearly a year later, in the month of October, London was startled by a crime of singular ferocity and rendered all the more notable by the high position of the victim. The details were few..  </p>
          <span className='text-secondary mx-3'><i className='fas fa-calendar'></i>May 02 2023</span>
          <span className='text-secondary'><i className='fas fa-clock'></i>4 min Read</span>

        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 carimg'>
          <img src="images/blog2.jpg" alt="" />
        </div>
        </div>
    </div>
    <div class="carousel-item caro-flow">
          <div className='row py-3'>
      <div className='col-lg-6 col-md-6 col-sm-12 cars pt-5'>
        <strong className='str rounded-pill'><span className='spa mx-1'></span> Blog</strong> 
        <h1 className='my-2'>The mind and body are not seperate.What affect's one,affect's other.</h1>      
        <p>
        His recital put the Captain into an ecstasy; he went from the lady to the gentleman, and from the gentleman to the lady, to enjoy alternately the sight of their distress. He really shouted with pleasure; and, shaking Monsieur Du Bois strenuously by the hand
        </p>
        <span className='text-secondary mx-3'><i className='fas fa-calendar'></i>May 02 2023</span>
        <span className='text-secondary'><i className='fas fa-clock'></i>4 min Read</span>

      </div>
      <div className='col-lg-6 col-md-6 col-sm-12 carimg'>
        <img src="images/blog4.jpg" alt="" />
      </div>
      </div>
    </div>
    <div class="carousel-item caro-flow">
            <div className='row py-3'>
        <div className='col-lg-6 col-md-6 col-sm-12 cars pt-5'>
          <strong className='str rounded-pill'><span className='spa mx-1'></span> Blog</strong> 
          <h1 className='my-2'>Never let your memories be greater than your dream</h1>      
          <p>
          Before long the searchlight discovered some distance away a schooner with all sails set, apparently the same vessel which had been noticed earlier in the evening. The wind had by this
          </p>
          <span className='text-secondary mx-3'><i className='fas fa-calendar'></i>May 02 2023</span>
          <span className='text-secondary'><i className='fas fa-clock'></i>4 min Read</span>

        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 carimg'>
          <img src="images/blog6.jpg" alt="" />
        </div>
        </div>
    </div>
    <div class="carousel-item caro-flow">
          <div className='row py-3'>
            <div className='col-lg-6 col-md-6 col-sm-12 cars pt-5'>
              <strong className='str rounded-pill'><span className='spa mx-1'></span> Blog</strong> 
              <h1 className='my-2'>Self observation is the first step of unfolding</h1>      
              <p>
              Mr. Branghton's house is small and inconvenient; though his shop, which takes in all the ground floor, is large and commodious. I believe I told you before, that he is a silver-  </p>
              <span className='text-secondary mx-3'><i className='fas fa-calendar'></i>May 02 2023</span>
              <span className='text-secondary'><i className='fas fa-clock'></i>4 min Read</span>

            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 carimg'>
              <img src="images/land2.jpg" alt="" />
            </div>
      </div>    
      </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <div className='container-fluid blog3'>
        <div className='row justify-content-between'>
         <div className='col-lg-8 col-md-6 col-sm-12 bet'>
          <div className='row rs'>
            {
              bloc ?
                bloc.map((value,index)=>{
                  return(
                    <div className='col-lg-12 col-md-12 col-sm-12 dflex my-4'>
                    <div className='mx-3'>
                     <img src="images/blog3.jpg" alt="" />
                     </div> 
                     
                       <div>
                         <strong className='str rounded-pill'><span className='spa mx-1'></span> Blog</strong> 
                         <h3 className='my-2'>{value.title}</h3>      
                         <p>{value.body}</p>
                         <span className='text-secondary mx-3'><i className='fas fa-calendar'></i>May 02 2023</span>
                         <span className='text-secondary'><i className='fas fa-clock'></i>4 min Read</span>
                          <button className='btn'>
                           <i className='fas fa-heart heart'></i>
                           <strong className='love'>
                           <span className="badge rounded-pill text-dark">1</span>
                           </strong>
                           </button>
       
                       </div>        
                   </div>
                  )
                }):
                "Loading Post"
            }
          </div>
         </div>
         <div className='col-lg-4 col-md-6 col-sm-12 my-3 cf'>
          <div>
            <p><b>Feautured Post</b></p>
            <div className='cole d-flex my-3'>
             <div className='bloger '>
              <img src="images/beach.webp" alt="" />
              </div>
              <div className='ms-3'>
                <p>Never let your memories be greater than your dreams</p>
                <small  className='text-secondary'><i className='fas fa-clock'></i>4 min read</small>
                </div>  
            </div>
            <div className='cole d-flex my-3'>
             <div className='bloger '>
              <img src="images/photo-1665686440627-936e9700a100.jpg" alt="" />
              </div>
              <div className='ms-3'>
                <p>Never let your memories be greater than your dreams</p>
                <small className='text-secondary'><i className='fas fa-clock'></i>4 min read</small>
                </div>  
            </div>
            <div className='cole d-flex my-3'>
             <div className='bloger '>
              <img src="images/land1.jpg" alt="" />
              </div>
              <div className='ms-3'>
                <p>Never let your memories be greater than your dreams</p>
                <small  className='text-secondary'><i className='fas fa-clock'></i>4 min read</small>
                </div>  
            </div>
            <div className='cole d-flex my-3'>
             <div className='bloger '>
              <img src="images/drones_300x400.png" alt="" />
              </div>
              <div className='ms-3'>
                <p>Never let your memories be greater than your dreams</p>
                <small  className='text-secondary'><i className='fas fa-clock'></i>4 min read</small>
                </div>  
            </div>
            </div>
            <div><hr />
            <p><b>Latest Post</b></p>
            <div className='cole d-flex my-3'>
             <div className='bloger '>
              <img src="images/post1.webp" alt="" />
              </div>
              <div className='ms-3'>
                <p>Never let your memories be greater than your dreams</p>
                <small  className='text-secondary'><i className='fas fa-clock'></i>4 min read</small>
                </div>  
            </div>
            <div className='cole d-flex my-3'>
             <div className='bloger '>
              <img src="images/post2.webp" alt="" />
              </div>
              <div className='ms-3'>
                <p>Never let your memories be greater than your dreams</p>
                <small className='text-secondary'><i className='fas fa-clock'></i>4 min read</small>
                </div>  
            </div>
            <div className='cole d-flex my-3'>
             <div className='bloger '>
              <img src="images/scape.webp" alt="" />
              </div>
              <div className='ms-3'>
                <p>Never let your memories be greater than your dreams</p>
                <small  className='text-secondary'><i className='fas fa-clock'></i>4 min read</small>
                </div>  
            </div>
            <div className='cole d-flex my-3'>
             <div className='bloger '>
              <img src="images/blog1.jpg" alt="" />
              </div>
              <div className='ms-3'>
                <p>Never let your memories be greater than your dreams</p>
                <small  className='text-secondary'><i className='fas fa-clock'></i>4 min read</small>
                </div>  
            </div>
            </div>
            <div>
            <p><b>Follow Us</b></p>
            <div className='icon'>
                      <a href=""><i class='fab fa-facebook face mx-2'></i></a>
                      <a href=""><i class='fab fa-twitter twit mx-2'></i></a>
                      <a href=""><i class='fab fa-linkedin link mx-2'></i></a>
                      <a href=""><i class='fab fa-instagram insta mx-2'></i></a>
                      <a href="https://wa.me/08107905908"><i class='fab fa-whatsapp what mx-2'></i></a>
                   <a href="https://google.com"><i class='fab fa-github git mx-2'></i></a>
            </div>
            </div>
         </div>
        </div>
      </div>

    </div>
        
    </>
  )
}
 

export default Blog