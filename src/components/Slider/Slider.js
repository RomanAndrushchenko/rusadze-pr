import { Swiper, SwiperSlide } from "swiper/react";
import gmb from "../../shared/assets/images for slider/gmb.png";
import p4c from "../../shared/assets/images for slider/p4c.png";
import uklon from "../../shared/assets/images for slider/uklon.png";
import osocor from "../../shared/assets/images for slider/osocor.png";
import inki from "../../shared/assets/images for slider/inki.png";
import kyivbpm from "../../shared/assets/images for slider/kyivbpm.png";
import np from "../../shared/assets/images for slider/np.png";
import re from "../../shared/assets/images for slider/re.png";
import ufees from "../../shared/assets/images for slider/ufees.png";
import unknowncompany from "../../shared/assets/images for slider/unknowncompany.png";
import formen from "../../shared/assets/images for slider/formen.png";
import alchemist from "../../shared/assets/images for slider/alchemist.png";
import ama from "../../shared/assets/images for slider/ama.png";
import barbershop from "../../shared/assets/images for slider/barbershop.png";
import beer from "../../shared/assets/images for slider/beer.png";
import borodach from "../../shared/assets/images for slider/borodach.png";
import cafedash from "../../shared/assets/images for slider/cafedash.png";
import chiefdash from "../../shared/assets/images for slider/chiefdash.png";
import cloakroom from "../../shared/assets/images for slider/cloakroom.png";
import cossac from "../../shared/assets/images for slider/cossac.png";
import dempinox from "../../shared/assets/images for slider/dempinox.png";
import ds from "../../shared/assets/images for slider/ds.png";
import gas from "../../shared/assets/images for slider/gas.png";
import golda from "../../shared/assets/images for slider/golda.png";
import goose from "../../shared/assets/images for slider/goose.png";
import grealty from "../../shared/assets/images for slider/grealty.png";
import heaven from "../../shared/assets/images for slider/heaven.png";
import ib from "../../shared/assets/images for slider/ib.png";
import ivel from "../../shared/assets/images for slider/ivel.png";
import kebab from "../../shared/assets/images for slider/kebab.png";
import kebabburger from "../../shared/assets/images for slider/kebabburger.png";
import korydoor from "../../shared/assets/images for slider/korydoor.png";
import luckyduck from "../../shared/assets/images for slider/luckyduck.png";
import massage from "../../shared/assets/images for slider/massage.png";
import message from "../../shared/assets/images for slider/message.png";
import msky from "../../shared/assets/images for slider/msky.png";
import odesos from "../../shared/assets/images for slider/odesos.png";
import osocorbbq from "../../shared/assets/images for slider/osocorbbq.png";
import punto from "../../shared/assets/images for slider/punto.png";
import rooftophub from "../../shared/assets/images for slider/rooftophub.png";
import royaldonuts from "../../shared/assets/images for slider/royaldonuts.png";
import ruh from "../../shared/assets/images for slider/ruh.png";
import skycoffee from "../../shared/assets/images for slider/skycoffee.png";
import skyrent from "../../shared/assets/images for slider/skyrent.png";
import sushi from "../../shared/assets/images for slider/sushi.png";
import tacohouse from "../../shared/assets/images for slider/tacohouse.png";
import thebbq from "../../shared/assets/images for slider/thebbq.png";
import tita from "../../shared/assets/images for slider/tita.png";
import trvlbag from "../../shared/assets/images for slider/trvlbag.png";
import ubots from "../../shared/assets/images for slider/ubots.png";
import verona from "../../shared/assets/images for slider/verona.png";
import vitapark from "../../shared/assets/images for slider/vitapark.png";
import yescatering from "../../shared/assets/images for slider/yescatering.png";

import { Navigation } from "swiper";

import Styles from "../Slider/Slider.module.scss";

import "swiper/scss";
import "swiper/scss/navigation";

const Slider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView={8}
      className={Styles.bla_bla}
      breakpoints={{
        1440: {
          slidesPerView: 8,
        },
        1024: {
          slidesPerView: 6,
        },
        768: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide className={Styles.slides}>
        <img src={gmb} alt="geroi malogo biznesu" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={p4c} alt="parts for cars" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={uklon} alt="uklon" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={osocor} alt="osocor" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={inki} alt="inki" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={kyivbpm} alt="kyivbpm" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={np} alt="np" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={re} alt="re" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={ufees} alt="ufees" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={unknowncompany} alt="unknowncompany" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={formen} alt="formen" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={alchemist} alt="alchemist" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={ama} alt="ama" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={barbershop} alt="barbershop" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={beer} alt="beer" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={borodach} alt="borodach" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={cafedash} alt="cafedash" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={chiefdash} alt="chiefdash" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={cloakroom} alt="cloakroom" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={cossac} alt="cossac" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={dempinox} alt="dempinox" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={ds} alt="ds" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={gas} alt="gas" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={golda} alt="golda" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={goose} alt="goose" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={grealty} alt="grealty" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={heaven} alt="heaven" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={ib} alt="ib" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={ivel} alt="ivel" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={kebab} alt="kebab" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={kebabburger} alt="kebabburger" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={korydoor} alt="korydoor" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={luckyduck} alt="luckyduck" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={massage} alt="massage" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={message} alt="message" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={msky} alt="msky" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={odesos} alt="odesos" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={osocorbbq} alt="osocorbbq" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={punto} alt="punto" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={rooftophub} alt="rooftophub" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={royaldonuts} alt="royaldonuts" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={ruh} alt="ruh" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={skycoffee} alt="skycoffee" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={skyrent} alt="skyrent" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={sushi} alt="sushi" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={tacohouse} alt="tacohouse" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={thebbq} alt="thebbq" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={tita} alt="tita" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={trvlbag} alt="trvlbag" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={ubots} alt="ubots" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={verona} alt="verona" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={vitapark} alt="vitapark" />
      </SwiperSlide>
      <SwiperSlide className={Styles.slides}>
        <img src={yescatering} alt="yescatering" />
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
