import blogImg1 from "./images/blog-image-1.jpg";
import blogImg2 from "./images/blog-image-2.jpg";

export default function Article() {
  return (
    <main>
      <article  style={{ paddingTop: 50 }}>  
        <time dateTime="2020-11-12">11/12/20</time>
        <h3>On the Street in Brooklyn</h3>
        <img src={blogImg1} alt="Brooklyn street" width="100%" />
              
        <p>Eveniet laborum reiciendis possimus dolore nemo repellendus ipsum officia libero excepturi tenetur. 
            Pariatur labore placeat rerum dolores sequi impedit, itaque modi harum! Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Magni ipsa quae quisquam provident a deserunt libero ipsum autem, 
            incidunt animi modi dolores eum repudiandae, fugiat atque eveniet nam eos? Lorem ipsum dolor, 
            sit amet consectetur adipisicing elit. Omnis distinctio ipsam cum eaque, consectetur laboriosam hic 
            at voluptatum deserunt, voluptatibus sit! Nostrum, odit voluptas ipsum at maiores et unde voluptatum.</p>
              
        <aside>
          <ul>
            <li><a href="...">Continues...</a></li>  
          </ul>
        </aside>
      </article>

      <article>
        <time dateTime="2024-11-11">11/11/20</time>
        <h3>Vintage in Vogue</h3>
        <img src={blogImg2} alt="vintage" width="100%" />

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nulla ex voluptate assumenda eligendi 
            minus itaque culpa repudiandae dignissimos esse, sit laboriosam sequi nam facere cum beatae enim ad deleniti!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita, fuga eveniet culpa cumque quisquam 
            laboriosam sequi, repellat et modi harum aut cum minus esse! Corporis necessitatibus commodi labore dolorum.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quo voluptas culpa molestias reiciendis 
            accusantium eius molestiae, ipsam pariatur dolore ut cum, nemo officiis beatae unde exercitationem eligendi 
            harum sed.</p>
            
        <aside>
          <ul>
            <li><a href="...">Continues...</a></li>
          </ul>
        </aside>
      </article>
    </main>     
  );
}