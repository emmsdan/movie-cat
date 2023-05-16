import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './user.entity';

describe('UserService', () => {
  let service: UserService;

  const mockUserRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users = <User[]>[
        {
          name: 'test',
          email: 'johndoe@test.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
          id: 1,
        },
        {
          name: 'jane doe',
          email: 'janedoe@test.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
          id: 2,
        },
      ];
      mockUserRepository.find.mockReturnValue(users);

      const result = await service.findAll();

      expect(result).toEqual(users);
      expect(mockUserRepository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a user with the specified id', async () => {
      const user = <User>{
        name: 'test',
        email: 'johndoe@test.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 1,
      };
      mockUserRepository.findOne.mockReturnValue(user);

      const result = await service.findOne(user.id);

      expect(result).toEqual(user);
      expect(mockUserRepository.findOne).toHaveBeenCalledWith({
        where: { id: user.id },
      });
    });
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const user = <User>{
        name: 'test',
        email: 'johndoe@test.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockUserRepository.save.mockReturnValue(user);

      const result = await service.create(<User>{
        name: 'test',
        email: 'johndoe@test.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      expect(result).toEqual(user);
      expect(mockUserRepository.save).toHaveBeenCalled();
    });
  });
});
