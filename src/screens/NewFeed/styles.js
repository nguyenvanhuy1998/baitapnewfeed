import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  container_header__title: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  viewLine: {
    height: 0.5,
    backgroundColor: 'grey',
  },
  containerStory: {},
  containerItemStory: {
    margin: 8,
    alignItems: 'center',
  },
  containerItemStory__avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginBottom: 8,
  },
  containerItemStory__name: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
  },
  containerFeedItem: {
    marginTop: 8,
    marginHorizontal: 8,
  },
  containerFeedItem_header: {
    flexDirection: 'row',
  },
  containerFeedItem_header_left: {
    flexDirection: 'row',
    flex: 1,
  },
  containerFeedItem_header__image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  containerFeedItem_header_center: {
    marginLeft: 8,
  },
  viewRow: {
    flexDirection: 'row',
  },
  containerFeedItem_header_center__title: {
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  containerFeedItem_header_center__name: {
    fontSize: 14,
    color: 'gray',
    flex: 1,
  },
  containerFeedItem_header_center__time: {
    fontSize: 14,
    color: 'gray',
  },
  containerFeedItem_body: {
    marginVertical: 8,
  },
  containerFeedItem_body__content: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
  },
  containerFeedItem_footer: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  containerFeedItem_footer__icon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  containerFeedItem_footer__count: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
  },
  marginLeft8: {
    marginLeft: 8,
  },
});
export default styles;
