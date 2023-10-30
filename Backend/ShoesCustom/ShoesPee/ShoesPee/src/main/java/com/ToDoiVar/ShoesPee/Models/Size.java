package com.ToDoiVar.ShoesPee.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tbsize")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Size {
    @Id
    @Column(name = "sizeid")
    private int sizeid;
    @Column(name = "size")
    private String size;

}
