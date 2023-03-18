import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MyApiService } from './my-api.service';
import { environment } from 'src/environments/environment';

describe('MyApiService', () => {
  let service: MyApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MyApiService]
    });
    service = TestBed.inject(MyApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProduits', () => {
    it('should return an Observable of the products', () => {
      const mockResponse = [
        { id: 1, name: 'SushiBox1', price: 10 },
        { id: 2, name: 'SushiBox2', price: 15 }
      ];
      service.getProduits().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });
      const mockRequest = httpMock.expectOne(`${environment.apiUrl}`);
      expect(mockRequest.request.method).toBe('GET');
      mockRequest.flush(mockResponse);
    });
  });
});


/*import { TestBed } from '@angular/core/testing';
import { MyApiService } from './my-api.service';

describe('MyApiService', () => {
  let service: MyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});*/
