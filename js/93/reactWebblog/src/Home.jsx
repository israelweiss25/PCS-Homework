import { NavLink } from 'react-router';
import './home.css';
export default function Home(props) {
    console.log(props);
    return (
        <>
            <section id="aboutUs">
                <h1>Welcom to PCS Webblog</h1>
                <p>PCS Webblog is a website where you can find the most popular and interactive blogs in many areas of
                    intrest like tech, finance, sports, etc.</p>
            </section>
            <section id="users">
                <ul id="blogs">
                    {props.blogs?.map(blog => <li key={blog.id}>
                        <h3>{blog.name}</h3>
                        <a href={`https://${blog.website}`}>{blog.website}</a>
                        <p>{blog.company.bs}</p>
                        <NavLink to = {`/blog/${blog.id}`} className={"postLink"}>
                            <div>go to blog</div>
                        </NavLink>
                    </li>)}
                </ul>
            </section>

        </>
    )
}