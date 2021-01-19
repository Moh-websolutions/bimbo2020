import PropTypes from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Mainintro from '../components/MainIntro';

import useTranslation from 'next-translate/useTranslation';
import { useRouter} from 'next/router';

export default function Intro(props) {

    let { t } = useTranslation()
    let router = useRouter();
 
   return (
    <>
      <Mainintro>
          <Head>
              <title>{t('common:meta-title')}</title>
              <meta name="description" content={t('common:meta-description')} />
          </Head>
          
        <div className="slider-area d-flex align-items-center justify-content-center">
            <div className="main__circles">
                <div className="main__circle" data-aos="zoom-in"></div>
            </div>
            <div className="slider-active  d-flex align-items-center justify-content-center">
                <div className="single-slider slider-height slider-padding d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-lg-12">
                                <div className="hero__caption">
                                    <h1 data-animation="fadeInUp" data-delay=".6s">
                                    <Image 
                                        src="/assets/img/logo.svg" 
                                        width={480} 
                                        height={378}
                                        alt="Bimbo Daycare Logo"
                                        />
                                    </h1>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="hero__caption">
                                   <div className="slider-btns">
                                      <Link href="/en" locale="en" ><a data-animation="fadeInLeft" data-delay="1.0s" className="btn radius-btn mx-3 my-2">English</a></Link>
                                      <Link href="/fr" locale="fr" ><a data-animation="fadeInLeft" data-delay="1.0s" className="btn radius-btn mx-3 my-2">Français</a></Link>
                                   </div>
                                </div>
                            </div> 
                        </div>  
                    </div>
                </div> 
            </div>
        </div>
                  
      </Mainintro>
    
      <style jsx>{`
        body, html, main {
          overflow: hidden;
        }
        .slider-area {
          height:80vh
        }
        .slider-area .hero__caption h1 {
          line-height: 0;
          margin-bottom: 0;
        }
        .slider-padding {
            padding-top: 0px;
            padding-bottom: 0px;
        }
      `}</style>

  </>

  )
}
