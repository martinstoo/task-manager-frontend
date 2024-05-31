// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// import { Board } from '../dataaccess/board';
// import { BoardService } from '../service/board.service';

// describe('BoardService', () => {
//   let service: BoardService;
//   let httpMock: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [BoardService]
//     });
//     service = TestBed.inject(BoardService);
//     httpMock = TestBed.inject(HttpTestingController);
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should retrieve boards from the API via GET', () => {
//     const dummyBoards: Board[] = [
//       { board_id: 1, title: 'Board 1', description: 'Description 1', people = People},
//       { board_id: 2, title: 'Board 2', description: 'Description 2', people = People}
//     ];

//     service.getBoards().subscribe(boards => {
//       expect(boards.length).toBe(2);
//       expect(boards).toEqual(dummyBoards);
//     });

//     const req = httpMock.expectOne('http://localhost:9090/api/boards');
//     expect(req.request.method).toBe('GET');
//     req.flush(dummyBoards);
//   });

//   it('should add a new board via POST', () => {
//     const newBoard: Board = { id: 3, name: 'Board 3', description: 'Description 3' };

//     service.addBoard(newBoard).subscribe(board => {
//       expect(board).toEqual(newBoard);
//     });

//     const req = httpMock.expectOne('http://localhost:9090/api/boards');
//     expect(req.request.method).toBe('POST');
//     req.flush(newBoard);
//   });

//   it('should retrieve a board by id from the API via GET', () => {
//     const board: Board = { id: 1, name: 'Board 1', description: 'Description 1' };

//     service.getBoard(1).subscribe(b => {
//       expect(b).toEqual(board);
//     });

//     const req = httpMock.expectOne('http://localhost:9090/api/boards/1');
//     expect(req.request.method).toBe('GET');
//     req.flush(board);
//   });

//   it('should update a board via PUT', () => {
//     const updatedBoard: Board = { id: 1, name: 'Updated Board', description: 'Updated Description' };

//     service.updateBoard(1, updatedBoard).subscribe(board => {
//       expect(board).toEqual(updatedBoard);
//     });

//     const req = httpMock.expectOne('http://localhost:9090/api/boards/1');
//     expect(req.request.method).toBe('PUT');
//     req.flush(updatedBoard);
//   });

//   it('should delete a board via DELETE', () => {
//     service.deleteBoard(1).subscribe(response => {
//       expect(response).toBeUndefined();
//     });

//     const req = httpMock.expectOne('http://localhost:9090/api/boards/1');
//     expect(req.request.method).toBe('DELETE');
//     req.flush({});
//   });
// });
