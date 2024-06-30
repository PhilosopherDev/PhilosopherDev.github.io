import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

interface Post {
    title: string;
    content: string;
}

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(firestore, 'posts'));
            setPosts(querySnapshot.docs.map(doc => doc.data() as Post));
        };
        fetchData();
    }, []);

    return (
        <div>
            {posts.map((post, index) => (
                <div key={index} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Posts;
