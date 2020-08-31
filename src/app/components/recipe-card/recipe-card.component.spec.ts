import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardComponent } from './recipe-card.component';
import { AppModule } from '../../app.module'

describe('RecipeCardComponent', () => {
    let component: RecipeCardComponent;
    let fixture: ComponentFixture<RecipeCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RecipeCardComponent ],
            imports: [ AppModule ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RecipeCardComponent);
        component = fixture.componentInstance;
        component.recipe = {
            id: 1234,
            title: 'Very tasty recipe',
            image: 'https://test-link.com',
            imageType: 'jpg'
        }

        // Mock localstorage
        let store = {};
        const mockLocalStorage = {
            getItem: (key: string): string => {
                return key in store ? store[key] : null;
            },
            setItem: (key: string, value: string) => {
                store[key] = `${value}`;
            }
        };
        spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
        spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should change isFavorite when favorite function is called', () => {
        let current = component.isFavorite
        component.favorite();
        fixture.detectChanges();
        expect(component.isFavorite === !current).toBeTrue()
    });

    it('should add recipe to localstorage when favorite function is called', () => {
        component.favorite();
        fixture.detectChanges();
        expect(JSON.parse(localStorage.getItem('favorites'))[0]).toEqual(JSON.stringify(component.recipe));
    });
});
