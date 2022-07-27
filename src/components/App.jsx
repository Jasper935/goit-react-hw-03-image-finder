import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchByName } from 'api/fetchByName';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';
export class App extends Component {
  state = {
    gallery: [],
    loader: false,
    page: 1,
    search: '',
    totalHits: 0,
    modalIsOpen: false,
    imgForModal: '',
  };

  getSearch = s => {
    this.setState({ search: s });
  };

  componentDidUpdate = (prProps, prevState) => {
    const { search, page } = this.state;
    if (prevState.search !== search) {
      this.setState({ loader: true });
      fetchByName(search, page)
        .then(res => {
          if (res.data.hits.length === 0 || search.trim() === '') {
            toast.warning('Enter correct value');
            return;
          }
          this.setState(prSt => ({
            gallery: [...res.data.hits],
            page: prSt.page++,
            totalHits: res.data.totalHits,
          }));
        })
        .finally(() => this.setState({ loader: false }));
    }
  };
  openModal = img => {
    this.setState({
      imgForModal: img,
      modalIsOpen: true,
    });
  };
  onClick = () => {
    const { search, page } = this.state;
    fetchByName(search, page + 1).then(res =>
      this.setState(prevSt => ({
        gallery: [...prevSt.gallery, ...res.data.hits],
        page: prevSt.page + 1,
      }))
    );
  };
  getModalStatus = status => {
    this.setState({
      modalIsOpen: status,
    });
  };

  render() {
    const {
      search,
      page,
      gallery,
      totalHits,
      loader,
      modalIsOpen,
      imgForModal,
    } = this.state;
    return (
      <>
        <Searchbar value={search} getSearch={this.getSearch} />
        {loader && <Loader />}
        <ToastContainer />
        {modalIsOpen && (
          <Modal
            onClick={this.onClickModal}
            img={imgForModal}
            getModalStatus={this.getModalStatus}
          />
        )}
        {gallery.length > 0 && (
          <ImageGallery
            gallery={gallery}
            onClick={this.onClick}
            totalHits={totalHits}
            openModal={this.openModal}
          />
        )}
        {totalHits >= 12 * page && gallery.length > 0 && (
          <Button onClick={this.onClick} />
        )}
      </>
    );
  }
}
