import React,{Component}  from 'react';
import './support.css';
import Faq from 'react-faq-component';

const data = {
  title: "Frequently asked questions.",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
    }]
}

 class Support extends Component {
  render() {
    return (
      <div className="hey">
        <Faq data={data}/>
      </div>
    )
  }
}


export default Support