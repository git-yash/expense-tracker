import '@testing-library/jest-dom';
import {TextDecoder as NodeTextDecoder, TextEncoder as NodeTextEncoder} from 'util';

global.TextEncoder = NodeTextEncoder as unknown as typeof TextEncoder;
global.TextDecoder = NodeTextDecoder as unknown as typeof TextDecoder;
