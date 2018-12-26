import TouchTone from './TouchTone';
import {PLAY_DTMF_PAIR} from "./actions";

export const audioMiddleware = store => {

    const touchTone = new TouchTone();

    return next => action => {

        switch (action.type) {

            case PLAY_DTMF_PAIR:
                touchTone.play(action.tones);
                break;

            default:
                break;

        }

        next(action);
    }

};