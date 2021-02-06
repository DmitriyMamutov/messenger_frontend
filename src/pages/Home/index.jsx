import React from 'react';
import {Message, Dialogs} from "../../components"
import "./Home.scss"
const Home = () => (

   <section className="home">

      <Dialogs
         userId={0}
         items={[
            {
               _id: "bf9b05c598464da3044d8f2c5e4df73b",
                  text: "123",
                  created_at: "Wed Feb 01 2021",
                  user: {
                     _id: "0b0ec8510fc9ada0cbf71b40818884c6",
                     fullname: 'ЙЙЦЦУ',
                     avatar: null
                  }
               },
               {
                  _id: Math.random(),
                     text: "Hello world",
                     created_at: "Wed Feb 03 2021 21:33",
                     user: {
                        _id: "20226ca9e63eaaada2a12c72d5232cfb",
                        fullname: 'Petro',
                        avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUXFhUVFRUWFRUVFRUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFysaFh0tLS0rLS0tKystKysrLS0tLS0rLS03LS0tLSsrLS0tKystLSstLS0tLS03LS0rListK//AABEIAQMAwgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABCEAABAwIDBAcHAgQEBQUAAAABAAIDESEEEjEFQVFhBhMicYGR8AcyobHB0eEjUnKSovEUFTNCU2JjgrIkNENzwv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAQEAAgMAAgIBBQAAAAAAAAABAhEDITESQRNRBBQiMnGB/9oADAMBAAIRAxEAPwDr9EECgqAkSMoigCRFGiQCUKJVEYCATRHlUbam0Y4GhzyBmNBXSvEncBvK5r0i9pzCx8cAeH+6H9kNsaFwoa9yVo06fiJ2RjM9waOJ8T8gUUGIjeKscHDi01HmF5yxW3cTL78zzXsuLnOy5Sf95Br32rQJDttyZaMkdGDqGvdUkAChNbjQ077Kfkenf8Tt7DsaXOlblBoaVdSgBNaaWNU1szpJBiKdUSSakVAFQDc1Jp9Vw3F9IqgFjACW5ZN7TbKHU40sa10bwCVsDa4gq01yuBGpAaQQQ4cDqPHzPkNPQ0Tg5ocNCAfNAtXCMD00xEEnWxSAs0dE8uLDYgWrUXvZdF6O+0GOcHrmZS1ge5zB2WitHAtcc1rHs5rHdonKNNgQkkJjCbVgm/0pWv00rS9xcjf9FKITIyklOOCQUAgpJSykFMGnqLOFKeo0yCQC1BKIQQGxKCCIoMCkpSSUAESNBAABU3S7b7MFh3PLmh5DhGDvcGkg01Omiu6gCp0C4X7RdqOxb3SB36cZowajKXluZlDTVrLm5zcAFNoip2rt3E4svklkJa3LbMKAE090d3xWYkkJJPPl4Jx57IFb1JHdx9cUlrzUAUoL3pfzUr0U99KAOrQCvAcW8xr5pD2UueYBOgO8W1IShO7MXHWh5i551sjGJrqAe8Vp4IApXgkUd86Dkno4w4XsdPHgoz315dyfDuG7Qc/ugAGHQcfl8k5obE8OfrSyjhtTe3mn8nB3f38uW9A0uOj21XwSteTI4MrZr3NNDa1DfuNtOC7D0N6VR4xjxR7Cw0/Vy5qVIuW2sWkXv36ngschaa8CrPYWOljLnYeRzHlzeyCKE1OXsmzhc24VRLorHoshNuCq+iO124vDNlb3Ob+14s5vda3IhW7grSYKSUspBQDT1FmUt6izJkhFBAoIDYIkaSgwRIIFAElBJS2oDNdONpOZF1UbS+R7SWsBpma17Gvvet5IxSlw4rz9tbEve9xIoC73QC0DL2RQHcKfBdu9q5jZBC8uyy9YWxHNls5p6zM6vuhrQe8BcTwWHfM+7i4CtzW/ms8lYzaHc2KDYK+HoLUYbYVVeYLo0wahZ3kkbzitYXC4Im9NOVvMon4B2uU660XWY9lMAplHdQJmTYgdWosfJR+WL/A5xhNkGgcG5u/Tx4o37ONaAHmT9l1eHZTQ2mUC3IfJGNkR00r86pflV/TuPOw8jj7otTQfZAYW5eAaX+Ft1F1Ofo3GaloAJGtPjzKef0fjyBoGgpff3p/lL+ncle348vNR8pDswNL1FDSh1stn0i6OmMVa23Ld64LJYkZb0vpw38FrjluOfPG41s/Z3tWaLExxRuzMkdSWO9dD2wOWtR48u0uXnvoDmOOiLSQ7O2mlwXUcDXkSfDcvQYZQAcBRaRnTTkhycem3JkaeosylPUWZMkIoIyggmvSSjKIoUJEjSUAaU1IS2oDlPtwu/Dg6NjkO/e5tRw1azyCyPR+INYSRcjyrouhe2qAOw8BpcSkV5FtSP6R5LCbOszyWObfii2wjlfYO6zWGK1GzXWXLk7cExjVIjTdU5GVm0LcUAEoUTtky2Yemy5PyKPIlTiPi2BzSDvC5T0kwQa8htqm4XWJh2Sud9MMOHHPao4Lbivbn/kTcOeyKDNtFp/Yx7udxl/8A18F3N64t7H2j/MCSb9Q+lN92i/xXaXrsnjgph6bcnHptyZG3qJMpb1FmQSEUEZQTJrSiKCJChFEjRIAJbUhKagML7YWA4eEnXrqeGUk/ILnmGHY8aLoHtjjcYICB2RKanhVpp9Vh3lrGZnuDRWg76X+Sxz9b8XiXs4V81psFFZZXZmLiJBDvitVhcQKarlyjs47FhHGnC1Jw0wKXIVLQpqcATLJAnDO0C5okXgnJiRMYva0TPecEceKZIKscHDkfnwSspzKDnPZK550tP5+i6IDUFYDppHcdx9euK14vWXP/AIpHsfcRj6cYZB3aG3PshdoeuDdDZpYXuxEbsuRpbXK11c1yKOB4fFdw2fietijkNs7A4jgSLjzXXjlL04csLJMvqlPTbk49NuVszb1FmUpyizIJEKCIo0w1RRFBEgwQQRIAJQSEpqAofaHh8+z5h+3I/wDle0rjO32Fzmx1IAAce9y7d0z/APY4j+D4VFVyPH4TPK8DW3/iFjyXTbim2Y6po91zyd4DQdPknsFtyVtA2pF6cba1FTRafA7Ey1NLnU0rqpmC2BHFVzW0cRqNad5WXyn22/HfpA2J0mqcrnX+K1mGlkkaSAsLtTZTWPDm2OavxuujbHd+kO4LLKSeN+Pd6rKbUnmBrmLfoVn8XteYA53uIGpAsO9dGx+Ba8E0qbeFOCqZdkgtLC0FrtQR9tFWNic8LWUw0kUmUOmc2oBp1brg6HVX2ytmNb2oZSeNDu4d/epuA6MwxscwNs7U0qT8ArTC7LZH7oKWWf6LDj/ZyCuW9j8+axPS9hL22qSaDvqt5LYLNY7BGXExmnYYQ4ncSL5fglx3vauWf26O4PBxtw2Vt3U7R8bgLoGwY8uGiB/bXzJI+ayGKY1hfl0ofM7ltsA3LDGOEbB5NC24PbWX8nrHGQt6acnHpsrpcRt6izKU9RZkEiFBEUaYalEgiKDBBEggAjCSjCAb2jhBNDJEdJGOb3VBAK43DIRMQbOBo7vFj8V2yMrjO34uqx8zdxlcR3OOcfBwWPLOm3DdVpsIwEIYl4AUbC4kBuqqNv7WDWGhXLJt6FskRpx1shA4rZYRuVgHJZTo9iGOdqFszSgoQnkWH7BtkCwJEhAFaqBPiXM7QBpvHLiAp0urJrEbm0TGAxzXioKfnmBQVukPEqHECXUHA/ZO4qZO7H2fJLmLANwqTSm/gSiY2zpllnNzfg4MJ1kjI+JFe4XcfJbN6g7K2WIaknM92p3AcGqY8rr4sPjO3Jz8nzy68htxSHJRSXLVgbeosylPUWZBIhQRFGgNOggiTMESBRIA0ESFUgcaVyf2oYcsxodukYx3iKsP/iF1ZpWS9qGyTNhhM0VdAST/APW6zvIhp8Cpzm4vC6rClzgwXtSvfRU+NdnFK1V3suUSRCurbLObVwMsbi+I2rdpvTuXLj666ZweHljdWMkcty12z8ViHUa92XuFT8VRbIxcjgCGtcaElps4UN7LUYbrH0H+HcHa2LaHdrVO7p49fafBhiO0XOcebjQeGikPO5ILZrVjYytdX/t1sFV4iWd4AhcxznU0BytBFcxcbHcp7Vv9U3PE+FxfGbalm48xwKt8Ni+sYHDQhQsNsp8Y/UlMjt5oAL8GjRSoogxoaNwUZU5sUq1PRBtIHHi8+QACyeIetl0Xb/6VnMuPm4rbg9c/P4siU24pZTbl1OYkpBSkkoI29RZlKeosyAiFBAlBCWnRIIiU1BVFVBBIAggjQBtTvVhwLXCrXAgg6EEUIKae8NBc4gACpJ0AG9Y/bvtAZFURNqdznfMN4d6Rxi9tbNds7GOiNTE/tRk72HS/EaHuTG0Hf7h/cKPtfbr8WayuJI0P7a8OAT2zCJG5Xaj0Fz5SS7dOGVJw2HjcauaD8wr3DOpQtfIN3vOp81Bw+DA1FRdWGEwLdzXX8lPydUymu8dpjcMH0L3EkEm53u1Pip0EYaKNCj4fDAbiO8qSTQKcraLl/wANyPsoUktLpWImuozGmQ204/ZZ6Z72QKu7t5Wu6IbSBYYDZzKlvNp+xqqJ0Ia2gVTM5zHZmmhG8KsOT40ZcXyx06kU24LIbM6WOApIMw4j3hz5rS7P2nDiBWJ4dTUaOHeCuzHKZeOHLG43s8UkpxwTZVkaeo0ykvUWVBIhQQKCZNMUSCCRghVEggxpTQkBM7SxXUwyS/sY53kLIDD9PekdS6Fh7Efv/wDPJrTub8zyXK8Tii91SVYySl0Tqkk2JO8ucSSSqhous60k0lxFTMJiiw1G74j8KJCE6DlII41U3tc6azBY1r71V1DiQKLnU8rmSuyUAt3XAKnxY2Y/2WNjaZN4cUBvVdjNqDQXKo4TK/VxHdZWOFwQF1O9Hq07h2ueb6cPurrDRgKLhwApsZWdrTHHQ5m1CqZoq1VvIVDkaorXGKaSOmih4h72ETQuLZGXto4DcR9VcSRXUnC7IqQ6Tvy93ErTh+VvTLnuEnbW7H2n1zG57PLQacbV8+SmuWVc4g2NCKUpuvu+CusDtHN2X67juP5XovMSpFFlUx4USZAqGUECgmTS1RIIlJjRIIIAwqTp7Nk2fOeLQ3+ZwH1V2FlPalLTBZf3SNHlf6I+jclw5qx/ePkVCLFOwrP0yeLvkKfVIdGoaE4ZDGbkqNlEMa1So/G3MQeIA+iuIIBTVUWFm7ArzH2U/B4k0o46LLONsb0uoLKbG9V+HdZTIHLKtYsISpIeoUZRumUVrEmSVFGS7T8BFBg3Ou+w4bz9lMfQdlu7TgPutcOG3vLxz8v8mY9Y+hBAG31J3p0CvOnq6Zqa79E42lbUsuuSSajhttu6KRlfoRuSGPrbeni3f9EzIK3AuqSnYTaRb2X3HHeO/ip8hBFQagqgddDDYwxmmrd4+oTCzIQSBOw3zC6CA0qCKqIlJQ6oJNUKpEcCw3tdf+hCOMjj5MP3W4CwnteZWGA/9Rw82p/Rz1guqyxsbvy1P/df6pAYlCStD6pU0TrWqWhjqkJYahSsiAYlo1K5uUU4GvgbFLz5e5XE+CD2ktG64+Y8lUjCyObkaxxItXQHnmNlGUVhkn4LGV3q8wkyz+zNhyB36j2NHAVcft8VqsHhY2iwzc3/AEGnzUXjtX+aQ/h2OfpYfuNh4cVOgia24ueJ+g3Jpk577eCcJ/tuWmPHIxz5ssv9H3TVugK7vymWuHril9/zWmmRYJ3pcbqeq1TQcKWJPelA+NfWiAfY+vBER63plj9ydzW9euKYNEU7vXkmcQ2yky6ca8fmozjYg7tOY9fRMkOnNBOdWEEydAqhVFVESpUNHVJqgEA61c39quLBmhiB9xuYjhmcAKrpDSuQdL5mzY6VzbjJQd8eqV8Vj6onO7RA3W8rKTA2nJPjDtbQ6k3+qAUtAojAToTUjqAppO4OKR2Z7AaCgNN41P0+KkCE1BANxobX8Va7AjDYwDrqacaf3TOJNXHiQChFvZiKIjW3MBT4mspUEu77b1DixJBo4VHo1TppXs70wsY5BuFErOFXNJ8/NLDzXvTJNcQd6LrL0TD5Tu+OijyTevXKqAsGyUtVOtO9QcM+qltNtKeuCAccPz9ynoxa/qqZj7605euKey19eI+aAKS3go8wBuPXJPlw4V4ce4BR38tPFUlHq3iEEZaOI/pQQG7QRIJLBGESAQDlKgjiKea4zi8E/Dzytk1bmoeIdofELszFiPadsvsDEt3DI/5tKmqx9ZOamVp4tB8wmQ5N4V+aGMngW/ykhONbwSVTxqo8rxUDcT6+ifcSlQ0DiSKilL6XpX6IKrbBTUyCvvDdypqPWialf+t4Jtsg65gbYZd246/VAmspPNNBc4pfWqOLl5JyYc0jLbVAKY4pxjgda/BMdZU0+9067SvwTATS+uCjE7yd/wCUkAuNdw+KjzPq4N3CqQWkEminwu4efreqWGTN2RyVxA4C31+qCTozS9e4evVkouFL/BNwjiPRR5txr64Jgpzh6+tdE3ITqDru/ASiaUtX4nw+6bLd4p4GgCZITnCun9JQTxZy/qQTJv8A/D8/gj/w/NQ9r7chw47bqu3NGqw21el88tQw5G8tfNSpvMTPFH78rW95Cqpuk2Fb/wDIXdwqsJh8BiJzVrHvrvNaeZVxh+hGJd7xY3vJJ+CNhejplhh+/wDl/KhdJtoMxmHyxuLRW9W60Hem2+z+T/it8ioe0cN/h29TWpbqRvJupyvSsPVHs7YP6QHWe653+3jfipbdiD/iH+X8qZsk9h3J3zCkx6oi6rHbDFf9T+n8qyw+wgWAZ6gmpOUb9xFbbvJL1U/C2I1TRkoX7CDZwRJYVoMunxS3bHGevWHWvu/lWWMd+q0pUx7QQSM7ZH/P/T+UBsgZffr/ANv5Vq0VCRm3Jkpf8muP1D/L+UrE7KzdkPpzy/lWr3UFUWHZqUjVrtihjbP3cPyq9mxBRzusN7Ds+e9X2OksU2GXa39oBKAhYLYoaP8AUueX58FZR7KH7/h+Vk9h4GPqNnSCNokc+DM8NAeQY3E1dSprRW3RfZzXszSYXDFjnTjrD2pX/rOFHgx0pQfuOg8GS+Zs5o0f8PyljZ3/AFLU/b9arJx4CIYVxbDGScc+MgNYC+MY9zRGSRdmUAUNqABSm4AsliilaI8PPiJHDDg1jGTDtEcLgOzlc5skmUWrQXQGiOAH77chryF03Ls0EHtV7hp8VD2TE2LF4iGIZIRDA4sYKMjlc6UODW6MJY2Mlo413q7dw/v4pkqP8oHE+X5RqyyDg5BAYbCYSbFSUbVzjq46DvK3Wxeh0UVHS/qP5+6O4K72bs6OBgZG2gG/eTxKG0NpxQNzSPA5bz3BI0qOMNFGgAckskDVYHanTtxqIGUH7na+SzON21PL78riOGg8gkHX342Nur2+a5ntzEZ5Hni4qr2S3NICd1/JPYo1KnKtMIl7HdaRv8J+JVgxtNVT7KfSSnEEfUfJWtU4dORtqVMFlEg1U17bKmdQdoOu080uZ+hTGMOiXIeyEjWUFwm5rJOCJScQ+9EETSpp5qQ+yRh2WqixD0xUTE7v4h80xLjWte1pN5Xlrd9cjXPvwswlOTG7f4gq+bB9cY6PLHtkDmuABocrg6oOoLXuHjuSCZHjMNExjMhOWXIxjI3OLXsjzjKBoAwm6Xh2YWBzJG4ZzZJS/KGxOMldXktGmu9UOJw7xKC7ry1uLkcZImOL8rsPlDgI2ns1IbYK+wkhfNh8rZerijlcZJWua4uflY1pDwCTTMTawA4hMj3+a4URsIje5r804Y2JxcKSZnSub/tOc1vevcU9tHaWHe0MkjfKx8QmyiJ0g6utnuA0p5qhwmz5nMjaOthLMLLnc1oq/O92SGj2lp0c42zCrdM152zoJDU9W9uTAxwnM0jNIWlxDQbmgIB5mmoNALfZE2HFY8OwNGRktA3KKSglrzxJDTzsFYSO8BzVB0bgex5zNcAcNhBeoq5rX5h3ioqOavnO8+HBMjXiUEZDuPyQTDRYt5DHEa0XHMfiHyPc57i41NyUEFBoyCCCAs9ii7v4Sim1QQUZetsPDeFPbb/EPmr2TVBBUVPYYXU6RBBUzqqxGpSnH3USCRpeDN6I8Z73ggggfaTELKNJ9EEEJRMZo3+JqY2d7/c11Pkggg1jhfdJ31UyHVo3IIJwktuqJzigggFM47+KDxavNBBMkYoIIJh//9k='
                     }
                  },
            
         ]} />
         <Message 
         avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
      
         date= "Sat Jan 30 2021 18:00:53"
         audio = "http://www.evidenceaudio.com/wp-content/uploads/2014/10/lyricslap.mp3"
           
        /> 
   
        {/* <Message 
         avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
         text="Hello, world!"
         date= "Sat Jan 30 2021 19:22:53"
         isMe={true}
         isReaded={false}
        />  */}
      {/* <Message 
         avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
         isTyping
        /> */}
      {/* <Message 
         avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
         attachments={[
           
            {
               filename: 'image.jpg',
               url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
            }
         ]}
        /> */}

   </section>
);


export default Home;