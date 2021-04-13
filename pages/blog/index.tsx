
import React, { useContext, useRef, useEffect, useState } from 'react';
import Layout from 'components/Layout';

import { AuthContext } from '../../context/AuthContext';
import { firestore } from '../../config/firebaseSetup';

import formDetect from '../../ultils/formDetect';

import CreatBlog from './components/CreateBlog';
import BlogPost from './components/BlogPost';
import ModalDetail from './components/ModalDetailContent';

import { VStack } from '@chakra-ui/layout';

const DB = firestore.collection('blogs')

class BlogController<HTMLInputElement>{

    title = useRef<HTMLInputElement>(null)
    content = useRef<HTMLInputElement>(null)
    photo = useRef<HTMLInputElement>(null)
    msg = useRef<HTMLDivElement>(null)

    emptyForm() {
        this.title.current.value = null;
        this.content.current.value = null;
        this.photo.current.value = null;



    }
    submit = async () => {

        const fields = ['title', 'content', 'photo'];
        const postData = {
            title: this.title.current.value,
            content: this.content.current.value,
            photo: this.photo.current.value,
            dateCreated: new Date()
        }

        const resMsg = formDetect(fields, postData);

        if (resMsg === '') {
            DB.add(postData)
                .then(() => {
                    this.emptyForm()
                })
        } else {
            this.msg.current.innerHTML = resMsg;
        }


    }

    listBlog() {

    }
}

const Blog = () => {

    
    const [state, setState] = useState({
        isOpenBlog:false,
        curInfo: {
            title:'',
            content:'',
            photo:''
        }
    })

    const [listBlog, setListBlog] = useState([]);

    const user = useContext(AuthContext);

    const blogController = new BlogController();


    useEffect(() => {
        const unsubscribe = firestore
            .collection('blogs')
            .orderBy('dateCreated', 'asc')
            .onSnapshot(querySnapshot => {
                if (querySnapshot.size) {

                    setListBlog([]);

                    querySnapshot.forEach(documentSnapshot => {
                        const data = documentSnapshot.data();

                        setListBlog((prev) => {
                            return [
                                data,
                                ...prev,

                            ]
                        })


                    });

                } else {
                    // it's empty
                }
            })
        return () => {
            unsubscribe()
        }
    }, [firestore])
    
    const _openBlog = (info)=>{
        setState({
            isOpenBlog:true,
            curInfo:info
        });
    }

    const _closePost = ()=>{
        setState({
            isOpenBlog:false,
            curInfo:{}
        })
    }
    return (
        <Layout title="Blog" >
            { user ? <CreatBlog ref={blogController} /> : null}


            <ModalDetail info={ state.curInfo} isOpen={ state.isOpenBlog} onClose={ _closePost } />
            <VStack spacing={10} pb={120}>
                {
                    listBlog.map((item) => {
                        return <BlogPost onClick={()=>{ _openBlog(item) }} data={item} />
                    })
                }

            </VStack>
        </Layout>
    )
}

export default Blog