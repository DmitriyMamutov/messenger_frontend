import React, { useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames"
import { Time, IconReaded, Avatar } from '../'
import wave from '../../assets/img/wave.svg'
import pause from '../../assets/img/pause.svg'
import play from '../../assets/img/play.svg'
import {convertCurrentTime} from '../../utils/helpers'
import "./Message.scss"

const MessageAudio = ({audioSrc}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const audioElem = useRef(null);

    const togglePlay = () => {
        if (!isPlaying) {
            audioElem.current.play();
        } else { audioElem.current.pause(); }

    }

    useEffect(() => {
        audioElem.current.volume = "0.1";
        audioElem.current.addEventListener(
            'playing',
            () => {
                setIsPlaying(true);
            },
            false);
        audioElem.current.addEventListener(
            'ended',
            () => {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
            },
            false);
        audioElem.current.addEventListener(
            'pause',
            () => {
                setIsPlaying(false);
            },
            false);
            audioElem.current.addEventListener('timeupdate', ()=>{
                const duration = (audioElem.current && audioElem.current.duration) || 0;
                setCurrentTime(audioElem.current.currentTime);
                setProgress((audioElem.current.currentTime /duration )*100);
     
            })

    }, [])

    return(
        <div className="message__audio">
        <audio ref={audioElem} src={audioSrc} preload="auto" />
        <div className="message__audio-progress" style={{ width: progress + '%' }} />

        <div className="message__audio-info">
            <div className="message__audio-btn">
                <button onClick={togglePlay}>
                    {isPlaying ? <img src={pause} alt="Pause" /> : <img src={play} alt="Play"></img>}
                </button>
            </div>
            <div className="message_audio-wave">
                <img src={wave} alt="Wave" />
            </div>
            <span className="message__audio-duration">
                {convertCurrentTime(currentTime)}
                </span>

        </div>

    </div>
    )
    
}

const Message = ({
    avatar,
    user,
    text,
    date,
    audio,
    isMe,
    isReaded,
    attachments,
    isTyping,

}) => {
    return (
        <div className={classNames("message", {
            'message--isme': isMe,
            "message--is-typing": isTyping,
            "message--image": attachments && attachments.length === 1,
            "message--is-audio": audio,

        })}>
            <div className="message__content">
                <IconReaded isMe={isMe} isReaded={isReaded} />
                <div className="message__avatar">
                    <Avatar user={user} />
                </div>
                <div className="message__info">
                    <div>
                        {(audio || text || isTyping) && (
                            <div className="message__bubble">
                                {text && <div className="message__text">{text}</div>}
                                {isTyping && (<div className="message__typing">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                )}
                                {audio && <MessageAudio audioSrc={audio} />}
                            </div>
                        )}
                        {attachments && (
                            <div className="message__attachments">
                                {attachments.map((item, index, onSearch) => (
                                    <div key={index} className="message__attachments-item">
                                        <img src={item.url} alt={item.filename} />
                                    </div >
                                ))}
                            </div>
                        )}
                    </div>
                    {date && (
                        <span className="message__date">
                            <Time date={date} />
                        </span>)}
                </div>
            </div>
        </div>
    )
}


Message.defaultProps = {
    user: {}
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    audio: PropTypes.string
}

export default Message;