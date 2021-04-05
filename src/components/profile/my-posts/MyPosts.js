import React from 'react';
import './my-posts-style.css';
import Post from "./posts/Post";

const MyPosts = ( props ) => {
    let postElement = props.posts.map(post => <Post id={ post.id } message={ post.message } key={post.id}/>)

    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    return (
        <div>
            <div>
                <div className={ 'profile_info' }>
                    <div>
                        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                        "body": "et iusto sed quo iure voluptatem occaecati omnis eligendi aut adnvoluptatem doloribus
                        vel accusantium quis pariatur nmolestiae porro eius odio et labore et velit aut"
                    </div>
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>
                            <textarea ref={newPostElement}></textarea>
                        </div>
                        <div>
                            <button onClick={addPost}>add post</button>
                        </div>
                    </div>
                </div>
                <div className={ 'posts' }>
                    { postElement }
                </div>
            </div>
        </div>
    );
};

export default MyPosts;