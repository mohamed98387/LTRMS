// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
// Importation pour la table
import { Table } from './role-list.model';
import { tableData } from './data-role';
import { AdvancedService } from './role-list.service';
import { RoleListDirective, SortEvent } from './role-list.directive';
// Importation pour les modals
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})
export class RoleListComponent implements OnInit {
//
  addModal: NgbModal;
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: Table[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(RoleListDirective) headers: QueryList<RoleListDirective>;
  public isCollapsed = true;

  constructor(public service: AdvancedService, private modalService: NgbModal) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Administration' }, { label: 'Gestion Rôles', active: true }];
    /**
     * fetch data
     */
    this._fetchData();
  }
  /**
   * fetches the table value
   */
  _fetchData() {
    this.tableData = tableData;
    for (let i = 0; i <= this.tableData.length; i++) {
      this.hideme.push(true);
    }
  }
  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  /**
   * Delete Modal method
   */
  confirm() {
    Swal.fire({
      title: 'Etes-vous sûre?',
      text: 'Vous ne pourrez pas revenir en arrière!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Oui, Supprimez-le!',
      cancelButtonText: 'Annuler'
    }).then(result => {
      if (result.value) {
        Swal.fire('Supprimé!', 'Votre donnée a été supprimé', 'success');
      }
    });
  }
  /**
   * Open add modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content, { windowClass: 'modal-holder' });
  }
}
