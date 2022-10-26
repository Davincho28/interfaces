import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, notification } from 'antd'
import { BugOutlined } from '@ant-design/icons'
import { Link, Navigate, Route, useNavigate } from 'react-router-dom'

export const Login = () => {

    const history = useNavigate()

    const login = (e) => {
        if (e.username == "pedro123" && e.password == "1234") {
            notification.success({
                message: 'Bienvenido',
                description: 'Que la pases super <3',
            })
            history('/Courses')
        }
        else {
            notification.error({
                message: 'Error Inicio Sesion',
                description: 'Verifique los datos e intente nuevamente',
            })
        }
    }


    return (
        <div className=' bg-cover flex imagenbackg p-px h-screen'>
            <div className=' bg-zinc-900/50 mx-auto mt-32 mb-40 border-2 rounded border-white p-12 backdrop-blur-sm rotate-12 hover:shadow-xl hover:shadow-blue-700 cursor-pointer'>
                <h1 className='text-white hover:text-red-600 text-center'>Login</h1>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={login}
                    onFinishFailed={() => {
                        notification.error({
                            message: 'Error Inicio Sesion',
                            description: 'Ingrese sus datos',
                        })
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        className='text-white'
                        label={<label className='text-white'>Username</label>}
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input className='hover:shadow-blue-700 hover:shadow-md hover:bg-blue-300/50' />
                    </Form.Item>

                    <Form.Item
                        label={<label className='text-white'>Password</label>}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password className='hover:shadow-red-700 hover:shadow-md hover:bg-red-300/50' />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox><label className='text-white'>Remember me</label></Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button
                            icon={<BugOutlined
                                htmlType="submit"
                                style={{
                                    fontSize: '20px',
                                }} />}
                            className='hover:border-blue-600'
                            danger
                            htmlType="submit"
                            type="primary" >
                            Ingresar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
