import { Component } from 'react'
import { View, Text, Video } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Video src='https://qnyb00.cdn.ipalfish.com/0/aud/ca/6a/acd9979123d6d6529c2aef15b948' controls={false} ></Video>
      </View>
    )
  }
}
