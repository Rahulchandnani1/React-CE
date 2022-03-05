import ice from "./ice.png";
import data from "./data.json";
import React from 'react';
import './b.css';


const BlogList =()=>{
  /* 
*/
    return(
        <main>

<header>
			<nav>
				<div class="logo-container">
					<span class="logo"></span>Bloggers
				</div>
				<div class="links-container">
					<button  onClick="" >Section1</button>
					<button  onClick="">Section2</button>
					<button  onClick="">Section3</button>
					<button  onclick="">Latest Posts</button>

				</div>
				<div class="search-container">

					<button onClick="window.location='./test project.html';">signup</button>
				</div>
			</nav>
		</header>


<div class="img-container">
<img
  src={ice}/>
<div class="img">Sample Design</div>
</div>


            
<div class="post-conatiner">
<div class="flex-item-left">
<h3>Latest Posts</h3>
</div>
<div class="flex-item-right" id="post1">
    {data.map(post =>{return(<>
    
    <div key={post.id}>
        <h5>
            Insights
        </h5>
        <h4>
            {post.name}
        </h4><p>{post.body}</p>
        <h5>created by:<a href="https://www.google.com">{post.email}</a></h5>
        <hr />
    </div>
    </>);})}
</div>
</div>
<div class="section-container" id="section1">



<div class="section" id="section1" name="section1">
    <div class="heading">
    <h3>Section 1</h3><br/></div>
    <div class="blog">
    <div>
    <h5>Blog1</h5>
    <p>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod </p></div>
    <div>
    <h5>Blog2</h5>
    <p>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod  </p></div>
    <div>
    <h5>Blog3</h5>
    <p>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod  </p></div>
    <div>
    <h5>Blog4</h5>
    <p>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod  </p></div>
    </div>
    </div>
    
<div class="section" id="section2" name="section2">
    <div class="heading">
    <h3>Section 2</h3><br/></div>
    <div class="blog">
    <div>
    <h5>Blog1</h5>
    <p>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod </p></div>
    <div>
    <h5>Blog2</h5>
    <p>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod </p></div>
    <div>
    <h5>Blog3</h5>
    <p>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod </p></div>
    <div>
    <h5>Blog4</h5>
    <p>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod </p></div>
    </div>
    </div>
    
    <div class="section" id="section3" name="section3">
    <div class="heading">
    <h3>Section 3</h3><br/></div>
    <div class="blog">
    <div>
    <h5>Blog1</h5>
    <p>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod </p></div>
    <div>
    <h5>Blog2</h5>
    <p>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod </p></div>
    <div>
    <h5>Blog3</h5>
    <p>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod </p></div>
    <div>
    <h5>Blog4</h5>
    <p>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod </p></div>
    </div>
    </div>
   
 </div>
    
    <section>
   <footer>
    <div class="f-container">
    <div class="inlink">
    <a href="#">Link1</a>
    <a href="#">Link2</a>
    <a href="#">Link3</a></div>
    <div class="inlink">
    <a href="#">Link1</a>
    <a href="#">Link2</a>
    <a href="#">Link3</a></div>
    <div class="inlink">
    <a href="#">Link1</a>
    <a href="#">Link2</a>
    <a href="#">Link3</a></div>
    <div class="inlink">
    <a href="#">Link1</a>
    <a href="#">Link2</a>
    <a href="#">Link3</a></div>
    <div class="inlink">
    <a href="#">Link1</a>
    <a href="#">Link2</a>
    <a href="#">Link3</a></div>
    <div class="inlink">
    <a href="#">Link1</a>
    <a href="#">Link2</a>
    <a href="#">Link3</a></div>
    </div>
    </footer>
    </section>
    </main>
    );
}

export default BlogList;