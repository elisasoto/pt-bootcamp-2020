import { mockCharMapper } from './mockCardMapper';
import { mockInput, mockExpected } from './__fixtures__/mockCharData';

describe('Character Mapper', ()=>{
    it('characterMapper returns the correct format', () => {
        const result = mockCharMapper(mockInput);
        expect(result).toStrictEqual(mockExpected);
      });
    
      it('Character Mapper returns null when receiving null or undefined', () => {
        const result = mockCharMapper(null);
        expect(result).toBeNull();
    
        const result2 = mockCharMapper(undefined);
        expect(result2).toBeNull();
      });

      it('return null when receiving an empty object', () => {
        const result = mockCharMapper({});
        console.log(result)
        expect(result).toBeNull();
      });
})