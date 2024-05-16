"use client"
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import {useState,useEffect} from "react"


const page = () => {
  const [MaxPages,setMaxPages]=useState(0)
  const [pageCount,setPageCount]=useState(0)
  const [currentPage,setcurrentPage]=useState(1)
  const maxItemsCount=3

  const handlePageNumberClick = (pageNumber)=> {
    setcurrentPage(pageNumber)
  }
  useEffect(()=>{
    let count=Math.ceil(blogData.length/maxItemsCount)
    setPageCount(count)


    
  },[])
  return (
    <>
      <Breadcrumb
        pageName="Choose quizz category"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.slice((currentPage-1)* maxItemsCount,((currentPage-1)* maxItemsCount)+maxItemsCount).map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                  {Array.from({length:pageCount},(_,index)=>(
                    <li className="mx-1" key={index}>
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                      onClick={() => handlePageNumberClick(index+1)}

                    >
                      {index+1}
                    </a>
                  </li>
                  ))}
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
