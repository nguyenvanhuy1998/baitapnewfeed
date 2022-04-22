import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEllipsis from 'react-native-vector-icons/FontAwesome5';
import {dataFeeds, dataAvatar} from '../../utils/dumyData';
import styles from './styles';

export default class NewFeed extends Component {
  state = {
    heartCount: 0,
  };
  renderItemStory = ({item}) => {
    return (
      <View style={styles.containerItemStory}>
        <Image source={item.image} style={styles.containerItemStory__avatar} />
        <Text style={styles.containerItemStory__name}>{item.name}</Text>
      </View>
    );
  };
  renderStory = () => {
    return (
      <View style={styles.containerStory}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={this.renderItemStory}
          data={dataAvatar}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.viewLine} />
      </View>
    );
  };
  renderFeedItem = ({item, index}) => {
    return (
      <View style={styles.containerFeedItem}>
        <View style={styles.containerFeedItem_header}>
          <View style={styles.containerFeedItem_header_left}>
            <Image
              resizeMode="cover"
              source={item.image}
              style={styles.containerFeedItem_header__image}
            />
            <View style={styles.containerFeedItem_header_center}>
              <Text style={styles.containerFeedItem_header_center__title}>
                {item.title}
              </Text>
              <View style={styles.viewRow}>
                <Text style={styles.containerFeedItem_header_center__name}>
                  {item.name}
                </Text>
                <Text style={styles.containerFeedItem_header_center__time}>
                  {item.time}
                </Text>
              </View>
            </View>
          </View>
          <IconEllipsis name="ellipsis-h" size={16} />
        </View>
        <View style={styles.containerFeedItem_body}>
          <Text style={styles.containerFeedItem_body__content}>
            {item.content}
          </Text>
        </View>
        <View style={styles.containerFeedItem_footer}>
          <TouchableOpacity
            style={styles.viewRow}
            onPress={() => {
              this.setState({
                heartCount: this.state.heartCount + 1,
              });
            }}>
            <Image
              source={require('../../asset/heart.png')}
              style={styles.containerFeedItem_footer__icon}
            />
            <Text style={[styles.containerFeedItem_footer__count]}>
              {this.state.heartCount}
            </Text>
          </TouchableOpacity>
          <View style={[styles.viewRow, styles.marginLeft8]}>
            <Image
              source={require('../../asset/comment.png')}
              style={styles.containerFeedItem_footer__icon}
            />
            <Text style={styles.containerFeedItem_footer__count}>4</Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container_header}>
          <Icon name="camera" size={16} />
          <Text style={styles.container_header__title}>Feed</Text>
          <Icon name="pencil" size={16} />
        </View>
        <View style={styles.viewLine} />
        <FlatList
          data={dataFeeds}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={this.renderStory}
          renderItem={this.renderFeedItem}
          ItemSeparatorComponent={() => <View style={styles.viewLine} />}
        />
      </SafeAreaView>
    );
  }
}
