package br.sebrae.ce.checkinapp.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Event {

	@Id
	@GeneratedValue
	private long id;
	private String name;
	@OneToMany(cascade = CascadeType.ALL)
	private List<Presence> presences;
	private LocalDate eventBegin;
	private LocalDate eventEnd;
	
	public Event() {		
	}
	
	public Event(String name, LocalDate eventBegin, LocalDate eventEnd) {
		this.name = name;
		this.eventBegin = eventBegin;
		this.eventEnd = eventEnd;
		this.presences = new ArrayList<Presence>();
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Presence> getPresences() {
		return presences;
	}
	public void setPresences(List<Presence> presences) {
		this.presences = presences;
	}
	public LocalDate getEventBegin() {
		return eventBegin;
	}
	public void setEventBegin(LocalDate eventBegin) {
		this.eventBegin = eventBegin;
	}
	public LocalDate getEventEnd() {
		return eventEnd;
	}
	public void setEventEnd(LocalDate eventEnd) {
		this.eventEnd = eventEnd;
	}
}
