import React, { useState } from 'react'
import { Avatar, Card, Drawer, Modal, Radio } from 'antd';
import { BellOutlined } from '@ant-design/icons'
import Search from 'antd/lib/transfer/search';
import Meta from 'antd/lib/card/Meta';
import { Link } from 'react-router-dom';
export const Courses = () => {
    const [open, setOpen] = useState(false);
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const onChange = (e) => {
        const { value } = e.target;
        console.log(value)
    }

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className='container mt-5'>
                <div className='grid grid-cols-3 gap-2 '>
                    <div className='flex space-x-20'>
                        <div>
                            <img src='https://i.blogs.es/4172c9/ffxdh5lx0acd7ic/840_560.jpeg'
                                height="60" width="60">
                            </img>
                        </div>
                        <div className='grid grid-cols-4 text-center items-center gap-3'>
                            <div>
                                <Link to={'/'}><a href='' className='text-black hover:text-red-600'>Login</a></Link>
                            </div>
                            <div>
                                <Link to={'/Courses'}><a href='' className='text-black hover:text-red-600'>Courses</a></Link>
                            </div>
                            <div>
                                <a href='' className='text-black hover:text-red-600'>People</a>
                            </div>
                            <div>
                                <a href='' className='text-black hover:text-red-600'>Analitycs</a>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className='flex gap-4 ml-auto mt-1'>
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <BellOutlined
                            className='hover:text-red-700'
                            onClick={showDrawer}
                            style={{
                                fontSize: 30,
                            }} />
                        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='grid grid-cols-1'>
                    <div className='flex mx-auto mt-12'>
                        <h1 className='text-6xl'>Courses</h1>
                    </div>
                </div>
            </div>
            <div className='container mt-4 ml-8'>
                <div className='grid grid-cols-3'>
                    <div className='bg-red-300'>
                        <Search
                            placeholder="Search"
                            onChange={onChange}
                        />
                    </div>
                    <div className='flex mx-auto gap-6'>
                        <h1 className='hover:border-b-2 border-red-700'>
                            <a className='text-black hover:text-blue-700'>
                                All
                            </a>
                        </h1>
                        <h1 className='hover:border-b-2 border-red-700'>
                            <a className='text-black hover:text-blue-700'>
                                Published
                            </a>
                        </h1>
                        <h1 className='hover:border-b-2 border-red-700'>
                            <a className='text-black hover:text-blue-700'>
                                Draft
                            </a>
                        </h1>
                        <h1 className='hover:border-b-2 border-red-700'>
                            <a className='text-black hover:text-blue-700'>
                                Archived
                            </a>
                        </h1>
                    </div>
                    <div className='bg-purple-300 flex mx-auto '>
                        <Radio.Group
                            onChange={""}
                            value={""}
                        >
                            <Radio.Button value="top">Top</Radio.Button>
                            <Radio.Button value="bottom">Bottom</Radio.Button>
                            <Radio.Button value="left">Left</Radio.Button>
                        </Radio.Group>
                    </div>
                </div>
            </div>
            <div className='container ml-12 mt-6'>
                <div className='grid grid-cols-6'>
                    {
                        num.map((e) => {
                            return (
                                <div className='mt-4'>
                                    <Card
                                        key={e}
                                        hoverable
                                        style={{ width: 180 }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
