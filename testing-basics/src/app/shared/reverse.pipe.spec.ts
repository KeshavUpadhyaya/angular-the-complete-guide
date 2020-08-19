import { ReversePipe } from './reverse.pipe';
describe('ReversePipe', () => {
  it('should create reversePipe', () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
