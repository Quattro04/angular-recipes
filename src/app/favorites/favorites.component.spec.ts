import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

import { FavoritesComponent } from './favorites.component';

describe('FavoritesComponent', () => {
    let component: FavoritesComponent;
    let fixture: ComponentFixture<FavoritesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ FavoritesComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FavoritesComponent);
        component = fixture.componentInstance;

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

    it('should display "no favorites" message if there are none in localstorage', () => {
        component.getFavorites()
        fixture.detectChanges();
        let titleElement = fixture.debugElement.query(By.css('.cards'));
        expect(titleElement.nativeElement.textContent).toContain('Nothing here yet')
    })

    it('should not display "no favorites" message if there are any in localstorage', () => {
        let fakeRecipe = {
            id: 1234,
            title: 'Very tasty recipe',
            image: 'https://test-link.com',
            imageType: 'jpg'
        }
        let fakeFavorites = [JSON.stringify(fakeRecipe)]
        localStorage.setItem('favorites', JSON.stringify(fakeFavorites))

        component.getFavorites()
        fixture.detectChanges();
        
        let titleElement = fixture.debugElement.query(By.css('.cards'));
        expect(titleElement.nativeElement.textContent).not.toContain('Nothing here yet')
    })
});
